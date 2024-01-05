import  BASE_URL  from "../../serverConnection";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function useCategory() {


    const [category,setCategory]=useState([]);
    const getAll= async ()=>{
        try {
            const response = await axios.get(`${BASE_URL}category/api/getAll`);
            console.log(response.data.getCatData);

        } catch (error) {
            toast("Something Wrong in Category");
            console.error(error);
        }
    }
  return (getAll )
}

export default useCategory