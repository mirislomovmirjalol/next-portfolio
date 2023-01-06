import {motion} from "framer-motion";
import React from "react";

type Props = {}

export default function ProjectCard({}: Props) {
    return (
        <article
            className="mt-4 md:mt-12 p-6 md:p-8 shadow-inset-white dark:shadow-none rounded-3xl flex flex-col md:flex-row items-center flex-shrink-0 w-4/5 md:w-full snap-center">
            <motion.img
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 1}}
                src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3002&q=80"
                className="md:w-96 object-cover w-full h-auto rounded-xl shadow-2xl shadow-gray-800"
            />
            <div
                className="mt-4 md:mt-0 md:w-4/5 md:ml-12 w-full"
            >
                <div className="overflow-hidden text-gray-400">
                    <motion.h4
                        whileInView={{opacity: [0, 1], y: [-20, 0]}}
                        transition={{delay: 0.3}}
                        className="text-2xl md:text-4xl font-bold font-space mb-2 md:mb-4">
                        Project Name
                    </motion.h4>
                    <motion.p
                        whileInView={{opacity: [0, 1]}}
                        transition={{delay: 0.5}}
                        className="mb-4">
                        Some text about this project. Which technologies I used, what I learned, what I did. And more..
                    </motion.p>
                </div>
            </div>
        </article>
    )
}