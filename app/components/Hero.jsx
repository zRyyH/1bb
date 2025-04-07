import CountdownTimer from "./CountdownTimer";
import { FaDiscord } from "react-icons/fa";

const Hero = ({ countdown }) => {
    return (
        <header className="flex flex-col items-center justify-center pt-16 pb-16 px-4 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-slate-900 z-0"></div>
            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="inline-block bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 p-1 rounded-lg mb-8">
                    <div className="bg-slate-900 px-6 py-2 rounded-md">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 inline-block text-transparent bg-clip-text">1BB VALORANT</h1>
                    </div>
                </div>

                <p className="text-3xl font-bold mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">TRIGGER PARA OPERATOR</span>
                </p>
                <p className="text-xl mb-8 max-w-3xl mx-auto">
                    A <span className="font-bold text-blue-400">única tecnologia indetectável</span> que vai te levar do <span className="line-through text-red-400">Bronze</span> ao <span className="font-bold text-purple-400">IMORTAL</span> em questão de semanas!
                </p>

                <div className="relative w-full max-w-4xl h-64 sm:h-96 mb-8 rounded-lg overflow-hidden border-4 border-blue-600 shadow-lg shadow-blue-500/20">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/AN-w3ehcoN8?si=UhTBRzwWD-YYhDku"
                        title="Gameplay Exclusiva 1BB"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0"
                    ></iframe>
                </div>

                <CountdownTimer countdown={countdown} />

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                    <a
                        href="https://discord.gg/YTVq2ECu22"
                        className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-xl font-bold rounded-full shadow-lg shadow-green-500/30 transform hover:scale-105 transition-all duration-200 animate-pulse"
                    >
                        <span className="flex items-center justify-center gap-2">
                            COMPRAR AGORA
                        </span>
                    </a>
                    <a
                        href="https://discord.gg/YTVq2ECu22"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-xl font-bold rounded-full shadow-lg flex items-center justify-center gap-2 transform hover:scale-105 transition-all"
                    >
                        <FaDiscord size={24} />
                        ENTRAR NO DISCORD
                    </a>
                </div>

                <div className="flex items-center justify-center gap-3">
                    <div className="flex -space-x-2">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-gradient-to-br from-orange-400 to-red-600"></div>
                        ))}
                    </div>
                    <p className="text-sm"><span className="font-bold text-green-400">32 pessoas</span> compraram hoje</p>
                </div>
            </div>
        </header>
    );
};

export default Hero;