import {motion} from "framer-motion";
import BackgroundCircles from "./BackgroundCircles";
import React from "react";

type Props = {}

export default function Contact({}: Props) {
    return (
        <div className="flex relative items-center justify-center h-screen w-full z-10">
            <div className="overflow-auto absolute top-24 uppercase flex items-center justify-center">
                <motion.h1
                    whileInView={{y: [20, 0]}}
                    transition={{delay: 0.1, duration: 1}}
                    className="tracking-[20px] text-2xl text-gray-500 hidden md:block">
                    Contact
                </motion.h1>
            </div>
            <div
                className="relative px-8 md:p-32 max-w-screen-md w-full flex flex-col items-center justify-center rounded-3xl md:shadow-xl shadow-gray-700 bg-gray-800 z-10">

                <div
                    className="text-gray-300 my-4 overflow-hidden text-center">
                    <motion.h4
                        whileInView={{opacity: [0, 1], y: [-40, 0]}}
                        transition={{delay: 0.3}}
                        className="font-bold text-3xl my-2 tracking-wider">
                        Let's talk
                    </motion.h4>

                    <motion.p
                        whileInView={{opacity: [0, 1]}}
                        transition={{delay: 0.5}}
                        className="text-lg my-2 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-6 h-6 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"/>
                        </svg>

                        mirislomovmirjalol@gmail.com
                    </motion.p>
                    <motion.p
                        whileInView={{opacity: [0, 1]}}
                        transition={{delay: 0.7}}
                        className="text-lg my-2 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-6 h-6 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                        </svg>

                        +44 7311 299119‬
                    </motion.p>
                </div>



                <div className="mt-2">
                    <a
                        href="#projects"
                        className="py-2 px-6 border border-white text-white rounded-lg mt-16 font-semibold text-xl hover:shadow-lg hover:shadow-white transition-all mx-4">
                        Projects
                    </a>
                    <a
                        href="#home"
                        className="py-2 px-6 bg-white rounded-lg text-gray-800 mt-16 font-semibold text-xl hover:shadow-lg hover:shadow-white transition-all mx-4">
                        Home
                    </a>
                </div>
                <BackgroundCircles/>
            </div>
        </div>
    )
}