const Footer = () => {
    return (
        <footer className="bg-slate-900 py-10 px-4 border-t border-slate-800">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold mb-2">1BB</h3>
                    <p className="text-slate-400">© 2025 1BB Software. Todos os direitos reservados.</p>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">Termos de Uso</a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">Política de Privacidade</a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">Suporte</a>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                <p>Aviso: O uso de cheats viola os Termos de Serviço do Valorant e pode resultar em banimento da conta. 1BB não se responsabiliza por quaisquer penalidades aplicadas pela Riot Games.</p>
            </div>
        </footer>
    );
};

export default Footer;