import { useEffect, useState } from "react";
import { ProductPage } from "./ProductPage";
import { useNavigate } from "react-router-dom";

export function FrontPage() {
  const [photo, setPhoto] = useState([]);
  const navigate=useNavigate();
  const token = document.cookie.split("=")[1];
    console.log('TOKEN:', token);

  useEffect(() => {

    fetch("http://localhost:30036/product/preview",{
        method:"get",
        headers:{ "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"}
    })
      .then((res) => res.json()) 
      .then((res) => {
        console.log('Response:', res); 
        setPhoto(res.course); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const handleClick=async (productId)=>{
  await  fetch("http://localhost:30036/user/addTocart",{
      method:"post",
      headers:{"Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"},
        body: JSON.stringify({
      courseId: productId
    })
    })
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res);
      navigate("/AddToCart")
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {photo.map((e) => (
        <div key={e._id} className="flex flex-col items-center">
          <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
            <img
              src={e.imageUrl}
              alt={e.title}
              className="w-full h-64 object-cover"
            />
            <div className="px-4 py-3">
              <h3 className="text-xl font-semibold text-gray-900 truncate">
                {e.title}
              </h3>

              <button
                className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                onClick={()=>{
                   navigate('/ProductPage',{state:{product:e}});
                }}
              >
              Buy
              </button>
              <button
                className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                onClick={()=>{
                  handleClick(e._id)
                }}
              >
              AddToCart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
