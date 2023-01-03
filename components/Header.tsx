import react from 'react';
import {SocialIcon} from "react-social-icons";
import {motion} from "framer-motion";

type Props = {}

export default function Header({}: Props) {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-10 xl:items-center">
            <motion.div
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -100}}
                className="flex flex-row items-center"
            >
                <SocialIcon url="https://www.instagram.com/jalol.m_/" fgColor="gray" bgColor="transparent"/>
                <SocialIcon url="https://www.instagram.com/jalol.m_/" fgColor="gray" bgColor="transparent"/>
                <SocialIcon url="https://www.instagram.com/jalol.m_/" fgColor="gray" bgColor="transparent"/>
                <SocialIcon url="https://www.instagram.com/jalol.m_/" fgColor="gray" bgColor="transparent"/>
            </motion.div>
            <motion.div
                initial={{opacity: 0, x: 100}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: 100}}
                className="flex flex-row items-center text-gray-300 cursor-pointer"
            >
                <SocialIcon url="https://www.instagram.com/jalol.m_/"
                            className="cursor-pointer"
                            network="email"
                            fgColor="gray" bgColor="transparent"
                />
                <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
                    Get in touch
                </p>
            </motion.div>
        </header>
    )
}