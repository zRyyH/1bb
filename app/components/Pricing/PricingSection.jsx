import React, { useState } from "react";
import { FaCheck, FaBolt, FaLock, FaRocket, FaCrown, FaDiscord } from "react-icons/fa";

const PricingSection = () => {
    const [hoveredPlan, setHoveredPlan] = useState(null);

    const plans = [
        {
            id: "1d",
            name: "Plano Teste",
            duration: "1 dia",
            price: 5.90,
            badge: "BÁSICO",
            color: "purple",
            icon: <FaBolt className="text-2xl" />,
            features: [
                "Trigger ultimate para Operator",
                "Tecnologia indetectável de última geração",
                "Todas as configurações sem restrições",
                "Atualizações prioritárias",
                "Suporte VIP 24/7 por Discord"
            ]
        },
        {
            id: "3d",
            name: "Plano Curto",
            duration: "3 dias",
            price: 10.90,
            badge: "POPULAR",
            color: "green",
            icon: <FaLock className="text-2xl" />,
            features: [
                "Trigger ultimate para Operator",
                "Tecnologia indetectável de última geração",
                "Todas as configurações sem restrições",
                "Atualizações prioritárias",
                "Suporte VIP 24/7 por Discord"
            ]
        },
        {
            id: "7d",
            name: "Plano Semanal",
            duration: "7 dias",
            price: 15.90,
            badge: "RECOMENDADO",
            color: "blue",
            icon: <FaRocket className="text-2xl" />,
            features: [
                "Trigger ultimate para Operator",
                "Tecnologia indetectável de última geração",
                "Todas as configurações sem restrições",
                "Atualizações prioritárias",
                "Suporte VIP 24/7 por Discord"
            ]
        },
        {
            id: "15d",
            name: "Plano Premium",
            duration: "15 dias",
            price: 25.90,
            badge: "VANTAJOSO",
            color: "amber",
            icon: <FaCrown className="text-2xl" />,
            features: [
                "Trigger ultimate para Operator",
                "Tecnologia indetectável de última geração",
                "Todas as configurações sem restrições",
                "Atualizações prioritárias",
                "Suporte VIP 24/7 por Discord"
            ]
        },
        {
            id: "30d",
            name: "Plano 1BB Operator",
            duration: "30 dias",
            price: 49.90,
            badge: "EXCLUSIVO",
            color: "red",
            icon: <FaCrown className="text-2xl" />,
            features: [
                "Trigger ultimate para Operator",
                "Tecnologia indetectável de última geração",
                "Todas as configurações sem restrições",
                "Atualizações prioritárias",
                "Suporte VIP 24/7 por Discord"
            ]
        }
    ];

    const getColorClasses = (color, isHovered, isFeatured) => {
        const colorMap = {
            purple: {
                badge: "bg-purple-500",
                border: isHovered ? "border-purple-400" : (isFeatured ? "border-purple-500" : "border-slate-700"),
                button: isHovered ? "bg-purple-600" : "bg-purple-700",
                shadow: isHovered ? "shadow-lg shadow-purple-500/20" : ""
            },
            green: {
                badge: "bg-green-500",
                border: isHovered ? "border-green-400" : (isFeatured ? "border-green-500" : "border-slate-700"),
                button: isHovered ? "bg-green-600" : "bg-green-700",
                shadow: isHovered ? "shadow-lg shadow-green-500/20" : ""
            },
            blue: {
                badge: "bg-blue-500",
                border: isHovered ? "border-blue-400" : (isFeatured ? "border-blue-500" : "border-slate-700"),
                button: isHovered ? "bg-blue-600" : "bg-blue-700",
                shadow: isHovered ? "shadow-lg shadow-blue-500/20" : ""
            },
            amber: {
                badge: "bg-amber-500",
                border: isHovered ? "border-amber-400" : (isFeatured ? "border-amber-500" : "border-slate-700"),
                button: isHovered ? "bg-amber-600" : "bg-amber-700",
                shadow: isHovered ? "shadow-lg shadow-amber-500/20" : ""
            },
            red: {
                badge: "bg-red-500",
                border: isHovered ? "border-red-400" : (isFeatured ? "border-red-500" : "border-slate-700"),
                button: isHovered ? "bg-red-600" : "bg-red-700",
                shadow: isHovered ? "shadow-lg shadow-red-500/20" : ""
            }
        };

        return colorMap[color] || colorMap.blue;
    };

    return (
        <section className="py-16 px-4 bg-slate-800" id="comprar">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Nossos Planos</h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Escolha o plano ideal para sua experiência com 1BB Operator.
                        Todos os planos incluem nossa tecnologia anti-detecção.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {plans.map((plan) => {
                        const isHovered = hoveredPlan === plan.id;
                        const isFeatured = plan.id === "30d";
                        const colorClasses = getColorClasses(plan.color, isHovered, isFeatured);

                        return (
                            <div
                                key={plan.id}
                                className={`bg-slate-900 p-6 rounded-lg ${colorClasses.border} ${colorClasses.shadow} 
                                    border-2 transition-all duration-300 ${isHovered ? "transform translate-y-2" : ""
                                    } ${isFeatured ? "transform scale-105" : ""}`}
                                onMouseEnter={() => setHoveredPlan(plan.id)}
                                onMouseLeave={() => setHoveredPlan(null)}
                            >
                                <div className={`${colorClasses.badge} text-center py-1 px-4 rounded-full text-sm font-bold mb-4 inline-block`}>
                                    {plan.badge}
                                </div>

                                <div className="flex items-center mb-4">
                                    <div className={`mr-3 text-${plan.color}-400`}>
                                        {plan.icon}
                                    </div>
                                    <h3 className="text-xl font-bold">{plan.name}</h3>
                                </div>

                                <p className="text-3xl font-bold mb-6">
                                    R$ {plan.price.toFixed(2).replace('.', ',')}
                                    <span className="text-sm font-normal text-slate-400">/{plan.duration}</span>
                                </p>

                                <ul className="mb-6 space-y-3 text-sm">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className={`flex items-start ${isHovered ? "animate-pulse" : ""}`}>
                                            <FaCheck className={`text-${plan.color}-400 mr-2 mt-1 flex-shrink-0`} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full ${colorClasses.button} hover:opacity-90 py-3 rounded-md font-medium transition-colors flex items-center justify-center group`}>
                                    <a href="https://discord.gg/YTVq2ECu22" className="flex items-center">
                                        <span className="mr-2">Assinar Agora</span>
                                        <FaDiscord className={`transform transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`} />
                                    </a>
                                </button>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center p-6 bg-slate-700 rounded-lg max-w-3xl mx-auto">
                    <h3 className="text-xl font-bold mb-2">Não sabe qual plano escolher?</h3>
                    <p className="mb-4">Entre em nosso Discord e converse com nossa equipe de suporte para encontrar a melhor opção para você.</p>
                    <a
                        href="https://discord.gg/YTVq2ECu22"
                        className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 py-2 px-6 rounded-md font-medium transition-colors"
                    >
                        <FaDiscord className="mr-2" /> Entrar no Discord
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;