const FeatureCard = ({ icon, title, description, bgFrom, bgTo }) => {
    return (
        <div className="bg-gradient-to-b from-slate-700 to-slate-800 p-6 rounded-lg shadow-lg border border-blue-500/30 transform hover:scale-105 transition-all duration-300">
            <div className={`w-16 h-16 bg-gradient-to-r ${bgFrom} ${bgTo} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
            <p className="text-center">{description}</p>
        </div>
    );
};

export default FeatureCard;