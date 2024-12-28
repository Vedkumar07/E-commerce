import { useEffect, useState } from "react";

export function Purchese() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const token = document.cookie.split('=')[1];
    console.log(token);

    fetch("http://localhost:30036/user/purchases", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProduct(Array.isArray(res.courseData) ? res.courseData : [res.courseData]);  // Ensure res is treated as an array
      });
  }, []);

  return (
    <div>
      {product.map((e, index) => (
        <div key={index}>
         <div>{e.creatorId}</div>
         <div>{e.updatedAt}</div>
        </div>
      ))}
    </div>
  );
}
