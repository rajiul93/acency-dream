import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../utils/Loading";

const PrivetRout = ({ children }) => {

    const location = useLocation()
    const currentLocation = location.pathname
    const navigate = useNavigate();

  const [levelOne, setLevelOne] = useState(null);
  const [loading, setLoading] = useState(false);

//   check authentication by server
  const checkAuthor = async () => { 
    try {
        const data = await axios(`${import.meta.env.VITE_API}/auth`, {
            withCredentials: true,
          }); 
      
          if (data.status === 200) {
            setLoading(true);
            setLevelOne(true)
            return;
          }
    } catch (error) {
        navigate("/login")
    }
  };

  useEffect(() => {
    checkAuthor();
  }, [currentLocation]);

  if (!loading) {
    return <Loading />;
  }

  if (levelOne) {
    return children;
  }
};

export default PrivetRout;


