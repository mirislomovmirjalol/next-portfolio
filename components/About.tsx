import {motion} from "framer-motion";
import BackgroundCircles from "./BackgroundCircles";
import React from "react";

type Props = {}

export default function About({}: Props) {
    return (
        <div className="flex relative items-center justify-center h-screen w-full z-10">
            <div className="overflow-auto absolute top-24 uppercase flex items-center justify-center">
                <motion.h1
                    whileInView={{y: [20, 0]}}
                    transition={{delay: 0.1, duration: 1}}
                    className="tracking-[20px] text-2xl text-gray-500 hidden md:block">
                    About
                </motion.h1>
            </div>
            <div
                className="relative px-8 md:p-32 max-w-screen-md w-full flex flex-col items-center justify-center rounded-3xl md:shadow-xl shadow-gray-700 bg-gray-800 z-10">

                <motion.img
                    whileInView={{opacity: [0, 1], y: [20, 0]}}
                    transition={{duration: 1}}
                    className="rounded-xl h-64 object-cover mb-4 shadow-2xl shadow-gray-800"
                    src="https://images.unsplash.com/photo-1525971996320-268f0402052f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHBlcnNvbnxlbnwwfDJ8MHxibGFja3w%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""/>
                <div
                    className="text-gray-400 my-4 overflow-hidden">
                    <motion.h4
                        whileInView={{opacity: [0, 1], y: [-40, 0]}}
                        transition={{delay: 0.3}}
                        className="font-bold text-2xl my-2 tracking-wider">
                        Basic Info
                    </motion.h4>
                    <motion.p
                        whileInView={{opacity: [0, 1]}}
                        transition={{delay: 0.5}}
                        className="text-sm my-2">
                        I'm 18 years old. I'm software engineering student. My strongest skills around designing
                        structure of databases, making rest APIs, web apps such as admin dashboard, SPA, websites. I'm
                        always ready to learn new technologies and improve my skills.
                    </motion.p>
                </div>

                <div>
                    <a
                        href="#home"
                        className="py-2 px-6 border border-white text-white rounded-lg mt-16 font-semibold text-xl hover:shadow-lg hover:shadow-white transition-all mx-4">
                        Home
                    </a>
                    <a
                        href="#about"
                        className="py-2 px-6 bg-white rounded-lg text-gray-800 mt-16 font-semibold text-xl hover:shadow-lg hover:shadow-white transition-all mx-4">
                        About
                    </a>
                </div>
                <BackgroundCircles/>
            </div>
        </div>
    )
}