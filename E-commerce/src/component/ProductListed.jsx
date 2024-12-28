import {  useEffect,useState } from "react";
export function ProductListed(){
    const[message,setMessage]=useState([]);
    useEffect(()=>{
      const token=document.cookie.split("=")[1];
      console.log('TOKEN:', token);
      fetch('http://localhost:30036/admin/course/bulk',{
        method:"get",
        headers:{
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((res)=>{ res.json()})
        .then((res)=>{
          console.log(res.courseData);
          setMessage(Array.isArray(res.courseData)?res.courseData:[res.courseData]);
        })
        .catch((error)=>{
          console.error("Error fetching data:", error);
        })
    },[])
    return<div>
        {message.map((e,index)=>{
         return <div key={index}>
            <div>{e.title}</div>
            <div>{e.description}</div>
            <div>{e.price}</div>
          </div>
        })}
    </div>
}