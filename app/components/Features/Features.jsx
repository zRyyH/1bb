import FeatureCard from "./FeatureCard";
import { FaShieldAlt, FaCrosshairs, FaTrophy } from "react-icons/fa";

const Features = () => {
    return (
        <section className="py-16 px-4 bg-slate-800">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">VANTAGEM EXCLUSIVA</span>
                    <h2 className="text-4xl font-bold mt-4">Por que o 1BB é REVOLUCIONÁRIO?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<FaShieldAlt size={32} />}
                        title="100% INDETECTÁVEL"
                        bgFrom="from-red-500"
                        bgTo="to-red-600"
                        description={<>Nossa tecnologia proprietária de bypass passa despercebida pelo Vanguard. <span className="font-bold text-green-400">ZERO BANIMENTOS</span> registrados até hoje.</>}
                    />

                    <FeatureCard
                        icon={<FaCrosshairs size={32} />}
                        title="ESPECIALISTA EM OPERATOR"
                        bgFrom="from-blue-500"
                        bgTo="to-blue-600"
                        description={<>Trigger otimizado com <span className="font-bold text-yellow-400">precisão milimétrica</span> que funciona exatamente quando você precisa, garantindo kills impossíveis.</>}
                    />

                    <FeatureCard
                        icon={<FaTrophy size={32} />}
                        title="DO BRONZE AO IMORTAL"
                        bgFrom="from-green-500"
                        bgTo="to-green-600"
                        description={<><span className="font-bold text-purple-400">99% dos usuários</span> relatam melhora drástica em suas patentes em menos de 30 dias de uso.</>}
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;