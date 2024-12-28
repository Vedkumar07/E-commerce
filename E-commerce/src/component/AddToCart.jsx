import { useEffect, useState } from "react";

export function AddToCart(){
  
  const[data,setData]=useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = document.cookie.split("=")[1];
    console.log(token);

    fetch('http://localhost:30036/user/cart', {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(Array.isArray(res.courseData) ? res.courseData : [res.courseData]);
        setLoading(false);  
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);  
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return(
    <div>
    Hello
    {data.map((e,index)=>{
      return <div key={index}>
        <div>{e.creatorId}</div>
        <div>{e.createdAt}</div>
      </div>
    })}
  </div>)
}

