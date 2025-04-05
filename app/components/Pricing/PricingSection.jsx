import { FaCheck } from "react-icons/fa";

const PricingSection = () => {
    return (
        <section className="py-16 px-4 bg-slate-800" id="comprar">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Nosso Plano</h2>
                <div className="max-w-md mx-auto">
                    <div className="bg-slate-900 p-8 rounded-lg shadow-lg border-2 border-blue-500">
                        <div className="bg-blue-500 text-center py-1 px-4 rounded-full text-sm font-bold mb-4 inline-block">EXCLUSIVO</div>
                        <h3 className="text-2xl font-bold mb-2">Plano 1BB Operator</h3>
                        <p className="text-4xl font-bold mb-4">R$ 49,90<span className="text-base font-normal">/mês</span></p>
                        <ul className="mb-6 space-y-3">
                            <li className="flex items-center">
                                <FaCheck className="text-green-400 mr-2" />
                                Trigger especializado para Operator
                            </li>
                            <li className="flex items-center">
                                <FaCheck className="text-green-400 mr-2" />
                                Tecnologia indetectável pelo Vanguard
                            </li>
                            <li className="flex items-center">
                                <FaCheck className="text-green-400 mr-2" />
                                Configurações personalizáveis
                            </li>
                            <li className="flex items-center">
                                <FaCheck className="text-green-400 mr-2" />
                                Atualizações constantes
                            </li>
                            <li className="flex items-center">
                                <FaCheck className="text-green-400 mr-2" />
                                Suporte por Discord
                            </li>
                        </ul>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-md font-medium transition-colors text-lg">Assinar Agora</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;