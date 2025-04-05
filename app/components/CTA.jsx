const CTA = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold mb-6">Pronto para dominar com o Operator?</h2>
                <p className="text-xl mb-8">Por apenas R$ 49,90 por mês, você pode transformar sua jogabilidade e chegar ao Imortal.</p>
                <a
                    href="#comprar"
                    className="bg-white text-blue-600 font-bold px-8 py-3 rounded-full text-lg shadow-lg hover:bg-gray-100 transition-colors inline-block"
                >
                    ASSINAR AGORA
                </a>
                <p className="mt-4 text-sm opacity-75">Garantia de 7 dias ou seu dinheiro de volta</p>
            </div>
        </section>
    );
};

export default CTA;