import React from "react";
import {Cursor, Typewriter, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import {motion} from "framer-motion";

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Front-end Developer", "Back-end Developer", "UI-UX Designer"],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div
            className="flex items-center justify-center h-screen w-full z-10">
            <div
                className="relative p-16 md:p-32 max-w-screen-md w-full flex flex-col items-center justify-center rounded-3xl md:shadow-xl shadow-gray-700 bg-gray-800 z-10">
                <p
                    className="inline-flex items-center text-center text-lg md:text-2xl text-gray-300 tracking-wide">
                    Hello, I'm
                </p>
                <div className="overflow-hidden">
                    <motion.h1
                        whileInView={{y: [70, 0]}}
                        transition={{duration: 1}}
                        className="text-6xl md:text-8xl font-bold my-4 tracking-wide font-space">Jalol
                    </motion.h1>
                </div>
                <h2 className="mt-6 text-lg md:text-xl text-center tracking-wide text-gray-300">
                    {text}
                    <Cursor cursorColor="#F4D168"/>
                </h2>
                <a href="#about"
                    className="py-2 px-6 bg-white rounded-lg text-gray-800 mt-16 font-semibold text-xl hover:shadow-lg hover:shadow-white transition-all">
                    About
                </a>

                <BackgroundCircles/>
            </div>
        </div>
    )
}