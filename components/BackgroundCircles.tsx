import {motion} from "framer-motion";

type Props = {}
export default function BackgroundCircles({}: Props) {
    return (
        <>
            <motion.div
                whileInView={{opacity: [0, 1]}}
                exit={{opacity: 0}}
                transition={{duration: 2.5}}
                className="absolute -z-10 max-h-full max-w-screen-lg w-full h-full blur-2xl">
                <div
                    className="absolute top-1/4 left-8 w-56 h-56 bg-purple-400 rounded-full mix-blend-multiply opacity-70 animate-blob filter blur-3xl">
                </div>
                <div
                    className="absolute bottom-2/4 right-8 w-56 h-56 bg-blue-400 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-4000 filter blur-3xl"></div>
                <div
                    className="absolute bottom-0 left-1/3 w-56 h-56 bg-pink-400 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000 filter blur-3xl"></div>
            </motion.div>
        </>
    )
}