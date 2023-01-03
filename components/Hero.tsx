import React from "react";
import {Cursor, Typewriter, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

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
            <div className="p-16 md:p-32 max-w-screen-md w-full flex flex-col items-center justify-center rounded-3xl shadow-xl shadow-white z-10">
                <p className="inline-flex items-center text-center text-lg md:text-2xl text-gray-300 tracking-wide">
                    Hello, I'm
                </p>
                <h1 className="text-6xl md:text-8xl font-bold my-4 tracking-wide font-space">Jalol</h1>
                <h2 className="mt-6 text-lg md:text-xl text-center tracking-wide text-gray-300">
                    {text}
                    <Cursor cursorColor="#F4D168"/>
                </h2>
            </div>
        </div>
    )
}