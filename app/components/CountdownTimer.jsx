const CountdownTimer = ({ countdown }) => {
    return (
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-4 rounded-lg mb-8 max-w-2xl mx-auto">
            <p className="font-bold text-xl mb-2">⏰ OFERTA ESPECIAL POR TEMPO LIMITADO:</p>
            <div className="flex justify-center gap-4 text-white mb-4">
                <div className="bg-slate-800 p-2 rounded-md w-16 text-center">
                    <span className="block text-2xl font-bold">{countdown.hours.toString().padStart(2, '0')}</span>
                    <span className="text-xs">Horas</span>
                </div>
                <div className="bg-slate-800 p-2 rounded-md w-16 text-center">
                    <span className="block text-2xl font-bold">{countdown.minutes.toString().padStart(2, '0')}</span>
                    <span className="text-xs">Minutos</span>
                </div>
                <div className="bg-slate-800 p-2 rounded-md w-16 text-center">
                    <span className="block text-2xl font-bold">{countdown.seconds.toString().padStart(2, '0')}</span>
                    <span className="text-xs">Segundos</span>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;