import  BASE_URL  from "../../serverConnection";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const[isLogged,setIsLogged]=useState(false)
  const navigate = useNavigate();
  let location = useLocation();
  const [localUser, setlocalUser] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('user'));
    if (items) {
        setlocalUser(items);
    }
  }, []);
  const login = async (data) => {
    try {
      const authResult = await axios.post(`${BASE_URL}/user/api/login`, data);
     
      const userObj = {
        status:true,
        user:authResult.data.user,
        token: authResult.data.token,
      };
      setUser(userObj);

      localStorage.setItem("user", JSON.stringify(userObj));
      setIsLogged(true);
      toast("Login Successfull");
      navigate((location.state && location.state.from) || "/main"); // Check if location.state is truthy
    } catch (error) {
      toast("Something Wrong");
      console.error(error);
    }
  };


  const logout = (status) => {
    setUser(null);
    setIsLogged(status)
    localStorage.removeItem('user');
  };
  return { localUser,user,isLogged,setIsLogged, login, logout };
};
export default useAuth;