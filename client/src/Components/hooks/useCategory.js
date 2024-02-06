import BASE_URL from "../../serverConnection";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const useCategory = () => {
  const auth = useAuthContext();
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{


    const getAll = async () => {
        try {
          if(auth.isLogged){
              // const localData = localStorage.getItem('user');
              // const token = localData.token;
  
              const token =auth.user.token;
              const response = await axios.get(`${BASE_URL}/category/api/getAll`, {
                headers: {
                  Authorization: `Bearar ${token}`,
                },
              });
             
              setCategory(response.data);
          }else{
              navigate("/")
          }
        } catch (error) {
            //  toast(error.response.data.message);
          console.error(error.response.data.message);
        }
      };
      getAll();
  },[auth.isLogged])


  return { category};
};

export default useCategory;
