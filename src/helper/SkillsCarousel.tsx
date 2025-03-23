"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaFigma, FaAngular, FaLinux } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiPython, SiHtml5, SiCss3, SiJenkins, SiGithubactions, SiExpress, SiAntdesign, SiWebgl, SiI18Next, SiShadcnui, SiNx } from "react-icons/si";
import { TbBrandFramerMotion, TbBrandRedux, TbBrandThreejs } from "react-icons/tb";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import zustandLogo from "@/assests/images/zustand-logo.svg"
import Image from "next/image";
const SkillsCarousel = () => {
    const skillsData = {
        frameworks: [
            { icon: FaReact, name: "React" },
            { icon: HiOutlineDeviceMobile, name: "React Native" },
            { icon: SiNextdotjs, name: "Next.js" },
            { icon: FaAngular, name: "Angular.js" },
            { icon: FaNodeJs, name: "Node.js" },
            { icon: SiExpress, name: "Express.js" },
        ],
        Tools: [
            { icon: TbBrandThreejs, name: "Three.js" },
            { icon: TbBrandRedux, name: "Redux" },
            { icon: "zustandLogo", name: "Zustand" },
            { icon: SiWebgl, name: "WebGL" },
            { icon: SiI18Next, name: "I18N" },
            { icon: SiNx, name: "NX Monorepo" },
        ],
        Ui: [
            { icon: SiTailwindcss, name: "Tailwind CSS" },
            { icon: TbBrandFramerMotion, name: "Framer Motion" },
            { icon: SiCss3, name: "CSS3" },
            { icon: FaFigma, name: "Figma" },
            { icon: SiShadcnui, name: "Shadcn ui" },
            { icon: SiAntdesign, name: "Ant Design" },
        ],
        cicd: [
            { icon: FaGitAlt, name: "Git" },
            { icon: FaDocker, name: "Docker" },
            { icon: SiGithubactions, name: "GitHub Actions" },
            { icon: FaLinux, name: "Linux" },
        ]
    };

    const SkillsSection = ({ title, skills }) => {
        return (

            <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold text-accent uppercase tracking-wider">{title === "Cicd" ? "CI/CD" : title}</h3>
                <div className="relative overflow-hidden w-full h-24 my-4 bg-border/20 rounded-lg">
                    <motion.div
                        className="flex w-max gap-12 mb-8"
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {[...skills, ...skills].map((skill, index) => (
                            <div
                                key={`${skill.name}-${index}`}
                                className="flex flex-col items-center justify-center mx-6 mt-4 min-w-24"
                            >
                                {
                                    skill.icon === "zustandLogo" ?
                                        <Image src={zustandLogo} alt="zustand-logo" width={50} height={50} />
                                        :
                                        <skill.icon
                                            size={50}
                                            className="text-4xl mb-2 text-primary"
                                        />
                                }
                                <p className="text-secondary font-medium text-sm text-center">
                                    {skill.name}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div >
            </div >
        );
    };

    return (
        <div className="w-full py-16 px-4 md:px-8 bg-background text-primary">
            <div className="max-w-2xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
                    <p className="text-secondary mt-6 max-w-2xl mx-auto">
                        Technologies I've mastered on my journey as a developer
                    </p>
                </div>

                {Object.entries(skillsData).map(([category, skills]) => (
                    <SkillsSection
                        key={category}
                        title={category.charAt(0).toUpperCase() + category.slice(1)}
                        skills={skills}
                    />
                ))}
            </div>
        </div>
    );
};

export default SkillsCarousel;