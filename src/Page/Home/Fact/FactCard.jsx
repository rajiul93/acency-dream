
const FactCard = ({Icon}) => {
    return (
        <div className="flex flex-col justify-center gap-4 text-center p-2">
            <Icon className="text-5xl mx-auto text-info" />
            <h1>+8</h1>
            <small>Years of IT Service</small>
        </div>
    );
};

export default FactCard;