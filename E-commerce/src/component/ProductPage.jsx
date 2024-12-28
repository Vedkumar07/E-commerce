import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function ProductPage() {
  const location = useLocation();
  const navigate=useNavigate();
  const { product } = location.state || {};
  if (!product) {
    return <div>Product not found</div>;
  }
  const token = document.cookie.split('=')[1]
  console.log(token);
  const handlePurchase = async (productId) => {
  console.log(productId);

  if (!token) {
    return <div>Error: Token is missing or invalid</div>;
  }
  console.log(`token: ${token}`)
   await fetch("http://localhost:30036/user/buy", {
        method: "post",
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        },
        body :JSON.stringify({
          courseId: productId
        })
      })
   .then((res)=>res.json())
    .then((res)=>{
      console.log(res)},
    navigate("/Purchase"))
      .catch((error)=>{
        console.log(error)
    })
  };

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.imageURL} alt={product.title} />
      <p>{product.description}</p>
      <button
        className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        onClick={() => {
          handlePurchase(product._id);
        }}
      >
        Buy
      </button>
    </div>
  );
}
