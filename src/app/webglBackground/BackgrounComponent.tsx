'use client'
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './BackgroundComponent.module.css'

export default function Home() {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            80, // Narrower FOV for less perspective distortion
            window.innerWidth / window.innerHeight,
            0.1,
            2000
        );

        // Position camera above the grid looking down
        camera.position.y = 60;
        camera.position.z = 0;
        camera.rotation.x = -Math.PI / 3; // Rotate camera to look straight down

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        mountRef.current.appendChild(renderer.domElement);

        // Create grid of cubes
        const cubes = [];
        const gridSize = 130; // Increased grid size for better coverage
        const spacing = 2.5;

        // Calculate how much to scale the grid to ensure full coverage
        const aspectRatio = window.innerWidth / window.innerHeight;
        const gridWidth = gridSize * spacing;
        const gridHeight = gridSize * spacing;

        for (let x = 0; x < gridSize; x++) {
            for (let z = 0; z < gridSize; z++) {
                // Create cube geometry and material
                const geometry = new THREE.BoxGeometry(1, 1, 1);

                // Random grayscale color for each cube
                const grayScale = Math.random() * 0.5 + 0.25; // Values between 0.25 and 0.75
                const material = new THREE.MeshStandardMaterial({
                    color: new THREE.Color().setHSL(46, 100, 50),
                    roughness: 1,
                    metalness: 1
                });

                const cube = new THREE.Mesh(geometry, material);

                // Position the cube in a grid
                cube.position.x = (x - gridSize / 2) * spacing;
                cube.position.z = (z - gridSize / 2) * spacing;

                // Store the original position for the wave animation
                cube.userData.originalY = cube.position.y;
                cube.userData.phaseOffsetX = x / gridSize * Math.PI * 2;
                cube.userData.phaseOffsetZ = z / gridSize * Math.PI * 2;

                scene.add(cube);
                cubes.push(cube);
            }
        }

        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        // Add directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(0, 1, 0); // Light from above for top-down view
        scene.add(directionalLight);

        // Animation variables
        const waveAmplitude = 2; // Height of the wave
        const waveFrequency = 1; // Speed of the wave

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Update each cube's position for wave effect
            const time = performance.now() * 0.001; // Convert to seconds

            cubes.forEach(cube => {
                const { originalY, phaseOffsetX, phaseOffsetZ } = cube.userData;

                // Create gentle wave motion
                const x = cube.position.x;
                const z = cube.position.z;

                cube.position.y = originalY + Math.sin(
                    time * waveFrequency +
                    phaseOffsetX +
                    phaseOffsetZ
                ) * waveAmplitude;

                // Subtle rotation
                cube.rotation.x = Math.sin(time * 0.3 + phaseOffsetX) * 0.1;
                cube.rotation.z = Math.sin(time * 0.2 + phaseOffsetZ) * 0.1;
            });

            renderer.render(scene, camera);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Function to check if scene fills viewport and adjust if needed
        const ensureFullCoverage = () => {
            // Check camera's field of view from its current position
            const vFOV = camera.fov * Math.PI / 180;
            const height = 2 * Math.tan(vFOV / 2) * camera.position.y;
            const width = height * camera.aspect;

            // If grid doesn't cover viewport, adjust camera height
            if (width > gridWidth || height > gridHeight) {
                const scaleFactor = Math.max(width / gridWidth, height / gridHeight) * 1.2; // Add 20% margin
                camera.position.y *= scaleFactor;
                camera.updateProjectionMatrix();
            }
        };

        // Run once after initialization
        ensureFullCoverage();

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current?.removeChild(renderer.domElement);

            // Dispose resources
            cubes.forEach(cube => {
                cube.geometry.dispose();
                cube.material.dispose();
            });
        };
    }, []);

    return (
        <div className={styles.webglBackground} ref={mountRef}></div>
    );
}