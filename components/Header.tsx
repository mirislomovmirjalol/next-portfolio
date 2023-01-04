import react from 'react';
import {SocialIcon} from "react-social-icons";
import {motion} from "framer-motion";

type Props = {}

export default function Header({}: Props) {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto xl:items-center z-20">
            <motion.div
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -100}}
                className="flex flex-row items-center"
            >
                <SocialIcon url="https://www.instagram.com/jalol.m_/" fgColor="gray" bgColor="transparent"/>
                <SocialIcon url="https://github.com/mirislomovmirjalol" fgColor="gray" bgColor="transparent"/>
                <SocialIcon url="https://www.linkedin.com/in/jalol-mirislomov-5b235a1a5/" fgColor="gray"
                            bgColor="transparent"/>
            </motion.div>
            <motion.div
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: 100}}
                className="flex flex-row items-center text-gray-300 cursor-pointer"
            >
                <button
                    // href="mailto:mirislomovmirjalol@gmail.com"
                >
                    <SocialIcon
                        className="cursor-pointer"
                        network="email"
                        fgColor="gray" bgColor="transparent"
                    />
                    <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
                        Get in touch
                    </p>
                </button>
            </motion.div>
        </header>
    )
}