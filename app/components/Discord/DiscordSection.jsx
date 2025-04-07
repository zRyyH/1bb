import { FaDiscord, FaHeadset, FaUsers, FaBell } from "react-icons/fa";
import { FaSlidersH } from "react-icons/fa";

const DiscordSection = () => {
    return (
        <section className="py-16 px-4 bg-gradient-to-r from-indigo-900 to-purple-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <FaDiscord className="w-full h-full text-white" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <span className="bg-white text-indigo-600 text-sm font-bold px-3 py-1 rounded-full">COMUNIDADE VIP</span>
                    <h2 className="text-4xl font-bold mt-4">Entre no Servidor Discord do 1BB</h2>
                    <p className="text-xl mt-4 max-w-2xl mx-auto">Faça parte da nossa comunidade exclusiva e tenha acesso a:</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <FaHeadset className="text-green-400" size={24} />
                            Suporte Técnico Prioritário
                        </h3>
                        <p>Nossos especialistas estão disponíveis 24/7 para ajudar com qualquer dúvida sobre instalação ou configuração.</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <FaSlidersH className="text-yellow-400" size={24} />
                            Configurações Avançadas
                        </h3>
                        <p>Dicas e truques dos melhores jogadores sobre como configurar seu trigger para máxima eficiência e discrição.</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <FaUsers className="text-blue-400" size={24} />
                            Comunidade de Jogadores
                        </h3>
                        <p>Conecte-se com outros jogadores que usam o 1BB, forme times imbatíveis e compartilhe suas experiências!</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <FaBell className="text-red-400" size={24} />
                            Alertas de Atualização
                        </h3>
                        <p>Seja o primeiro a saber quando há atualizações do Valorant e receba instruções para manter seu cheat funcionando perfeitamente.</p>
                    </div>
                </div>

                <div className="bg-indigo-800/50 p-6 rounded-lg mb-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="md:w-2/3">
                            <h3 className="text-2xl font-bold mb-2">Discord Oficial: 1BB Valorant Trigger</h3>
                            <p className="text-lg">Entre agora e junte-se a mais de 5.000 jogadores que estão dominando o Valorant com o 1BB!</p>
                        </div>
                        <a
                            href="https://discord.gg/YTVq2ECu22"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="md:w-1/3 px-8 py-4 bg-white text-indigo-700 font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                        >
                            <FaDiscord size={24} />
                            ENTRAR NO DISCORD
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscordSection;