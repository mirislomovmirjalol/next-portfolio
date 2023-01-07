import {motion} from "framer-motion";
import BackgroundCircles from "./BackgroundCircles";
import React from "react";
import ProjectCard from "./ProjectCard";

type Props = {}

export default function Projects({}: Props) {
    return (
        <div className="flex relative items-center justify-center h-screen w-full z-10">
            <div className="overflow-auto absolute top-24 uppercase flex items-center justify-center">
                <motion.h1
                    whileInView={{y: [20, 0]}}
                    transition={{delay: 0.1, duration: 1}}
                    className="tracking-[20px] text-2xl text-gray-500 hidden md:block">
                    Projects
                </motion.h1>
            </div>
            <div
                className="relative px-8 md:p-32 max-w-screen-lg w-full flex flex-col items-center justify-center rounded-3xl md:shadow-xl shadow-gray-700 bg-gray-800 z-10">

                <div className="w-full flex snap-x snap-mandatory overflow-x-scroll">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>

                <div className="mt-2">
                    <a
                        href="#about"
                        className="py-2 px-6 border border-white text-white rounded-lg mt-16 font-semibold text-xl hover:shadow-lg hover:shadow-white transition-all mx-4">
                        About
                    </a>
                    <a
                        href="#contact"
                        className="py-2 px-6 bg-white rounded-lg text-gray-800 mt-16 font-semibold text-xl hover:shadow-lg hover:shadow-white transition-all mx-4">
                        Contact
                    </a>
                </div>
                <BackgroundCircles/>
            </div>
        </div>
    )
}