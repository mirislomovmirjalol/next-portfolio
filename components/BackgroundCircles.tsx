type Props = {}
export default function BackgroundCircles({}: Props) {
    return (
        <>
            <div className="absolute z-0 max-h-full max-w-screen-lg w-full h-full">
                <div
                    className="absolute top-0 left-0 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply opacity-70 animate-blob filter blur-xl"></div>
                <div
                    className="absolute bottom-2/4 right-0 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-4000 filter blur-xl"></div>
                <div
                    className="absolute w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000 filter blur-xl"></div>
            </div>
        </>
    )
}