import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ name, initials, bgFrom, bgTo, quote, when, progress }) => {
    return (
        <div className="bg-slate-800 p-6 rounded-lg border border-green-500/30 relative">
            <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">VERIFICADO</div>
            <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${bgFrom} ${bgTo} mr-4 flex items-center justify-center font-bold text-xl`}>{initials}</div>
                <div>
                    <h4 className="font-bold">{name}</h4>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400" />
                        ))}
                    </div>
                </div>
            </div>
            <p className="italic mb-3">❝{quote}❞</p>
            <div className="flex justify-between text-xs text-slate-400">
                <span>{when}</span>
                <span>{progress}</span>
            </div>
        </div>
    );
};

export default TestimonialCard;