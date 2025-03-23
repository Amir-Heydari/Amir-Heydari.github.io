"use client";

import * as THREE from "three";
import { useEffect, useRef } from "react";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import styles from './BackgroundComponent.module.css'

const ThreeDLogo = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Create a Three.js scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x121212); // Dark Theme Background

        // Camera setup
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.set(0, 0, 100);

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        mountRef.current.appendChild(renderer.domElement);

        // Load and convert SVG to Three.js geometry
        const loader = new SVGLoader();
        loader.load("./logo-svg.svg", (data) => {
            const paths = data.paths;
            const group = new THREE.Group();

            paths.forEach((path) => {
                const shapes = path.toShapes(true);
                const material = new THREE.MeshStandardMaterial({
                    color: path.color || 0xe0e0e0, // Light Gray
                    metalness: 0.7,
                    roughness: 0.4,
                });

                shapes.forEach((shape) => {
                    const geometry = new THREE.ExtrudeGeometry(shape, {
                        depth: 5,
                        bevelEnabled: true,
                        bevelThickness: 1,
                        bevelSize: 0.5,
                        bevelSegments: 3,
                    });

                    const mesh = new THREE.Mesh(geometry, material);
                    mesh.castShadow = true;
                    mesh.receiveShadow = true;
                    group.add(mesh);
                });
            });

            group.position.set(-50, -50, 0);
            scene.add(group);

            // Animation loop
            function animate() {
                requestAnimationFrame(animate);
                group.rotation.y += 0.01;
                renderer.render(scene, camera);
            }
            animate();
        });

        // Lighting setup
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(10, 10, 10);
        directionalLight.castShadow = true;
        scene.add(directionalLight);

        // Cleanup function
        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} className={styles.webglBackground} />;
};

export default ThreeDLogo;