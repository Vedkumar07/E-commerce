import { useEffect, useState } from "react";
import { SideBar } from "../component/SideBar";
import { ProductListed } from "../component/ProductListed";
import { ProductListing } from "../component/ProductListing";
import {  CookieContext } from "../component/CookieInstance";
import { cookiesInstance } from "../component/BusinessAuthpg";

export function Buisness() {
  const [detail, setDetail] = useState(false);
  //const [token, setToken] = useState(null);
  const token=document.cookie;

  // useEffect(() => {
  //   const cookieInstance = cookiesInstance.get("TOKEN");
  //   console.log(cookieInstance);
  //   setToken(cookieInstance); // Save token to state
  // }, []);

  return (
    <div>
        <div className="flex-none w-14"><SideBar  onClick={(e)=>{if(e.current.innerHtml==ProductListing){setDetail(false)}else{setDetail(true)}}}/></div>
          <div className="flex-none w-96">
            {detail ? <ProductListed /> : <ProductListing />}
          </div>
    </div>
  );
}









