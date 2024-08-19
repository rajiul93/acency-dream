import axios from 'axios';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate()
    const logOut = async()=>{
        await axios.get(`${import.meta.env.VITE_API}/logout`, {withCredentials:true})
        navigate("/login")
    }
    return (
        <div>
            <button onClick={logOut}  className="flex gap-3 items-center text-error">Log Out <FaArrowRightFromBracket /></button>
        </div>
    );
};

export default Logout;