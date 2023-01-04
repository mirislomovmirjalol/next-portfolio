import {motion} from "framer-motion";

type Props = {}

export default function About({}: Props) {
    return (
        <div
            className="flex items-center justify-center h-screen w-full z-10">
            <div
                className="relative p-16 md:p-32 max-w-screen-md w-full flex flex-col items-center justify-center rounded-3xl md:shadow-xl shadow-gray-700 bg-gray-800 z-10">

                <div className="overflow-hidden">
                    <motion.h1
                        whileInView={{y: [70, 0]}}
                        transition={{delay: 0.1, duration: 1}}
                        className="text-6xl md:text-8xl font-bold my-4 tracking-wide font-space">About
                    </motion.h1>
                    <motion.h1
                        whileInView={{y: [70, 0]}}
                        transition={{delay: 0.2, duration: 1.2}}
                        className="text-6xl md:text-8xl font-bold my-4 tracking-wide font-space">About
                    </motion.h1>
                    <motion.h1
                        whileInView={{y: [70, 0]}}
                        transition={{delay: 0.3, duration: 1.4}}
                        className="text-6xl md:text-8xl font-bold my-4 tracking-wide font-space">About
                    </motion.h1>
                </div>
            </div>
        </div>
    )
}