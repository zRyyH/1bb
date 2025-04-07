import TestimonialCard from "./TestimonialCard";
import { FaDiscord } from "react-icons/fa";

const Testimonials = () => {
    return (
        <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">RESULTADOS COMPROVADOS</span>
                    <h2 className="text-4xl font-bold mt-4">Veja quem já está dominando</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <TestimonialCard
                        name="MarceloSniper"
                        initials="M"
                        bgFrom="from-red-400"
                        bgTo="to-orange-400"
                        quote="Comprei o 1BB depois de meses estagnado no Platina. Em DUAS SEMANAS já estava no Ascendente. O trigger para Operator é simplesmente PERFEITO!"
                        when="Ontem"
                        progress="Bronze → Ascendente"
                    />

                    <TestimonialCard
                        name="RafaelTopOp"
                        initials="R"
                        bgFrom="from-blue-400"
                        bgTo="to-indigo-400"
                        quote="Cheguei a pensar que era impossível sair do Diamante, até conhecer o 1BB. Hoje sou IMORTAL e todos perguntam qual meu segredo com o Operator. Muito obrigado!"
                        when="3 dias atrás"
                        progress="Diamante → Imortal"
                    />

                    <TestimonialCard
                        name="LucianaGames"
                        initials="L"
                        bgFrom="from-purple-400"
                        bgTo="to-pink-400"
                        quote="Como mulher no cenário competitivo, sempre foi difícil ser levada a sério. Com o 1BB, agora sou top 500 no ranking e NINGUÉM duvida das minhas habilidades com o Operator!"
                        when="1 semana atrás"
                        progress="Ouro → Imortal"
                    />
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://discord.gg/YTVq2ECu22"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-colors"
                    >
                        <FaDiscord size={20} />
                        Ver mais depoimentos no nosso Discord
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;