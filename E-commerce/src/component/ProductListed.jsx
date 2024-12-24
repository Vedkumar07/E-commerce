import {  useContext, useEffect,useState } from "react";
import axios from "axios";
import { CookieContext } from "./CookieInstance";
export function ProductListed(){
    const {token}=useContext(CookieContext);
    const[message,setMessage]=useState("");
    useEffect(()=>{
        const configration={
            method:"get",
            url:"http://localhost:30036/admin/course/bulk",
            header:{
                Authorization:`Bearer ${token}`,
            },
        };

        axios(configration)
      .then((result)=>{
        setMessage(result.data.message)
      })
      .catch((error)=>{
        error=new Error();
      });
    },[]);
    return<div>
        {message} hi
    </div>
}