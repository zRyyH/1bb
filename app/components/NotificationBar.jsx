const NotificationBar = ({ stockLeft, usersOnline }) => {
    return (
        <div className="bg-red-600 text-white py-2 px-4 text-center font-medium animate-pulse">
            ALERTA: Apenas {stockLeft} licenças disponíveis hoje! | {usersOnline} usuários online agora
        </div>
    );
};

export default NotificationBar;