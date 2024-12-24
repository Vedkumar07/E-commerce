import { useEffect, useState } from "react";
import { SideBar } from "../component/SideBar";
import { ProductListed } from "../component/ProductListed";
import { ProductListing } from "../component/ProductListing";
import { cookiesInstance, CookieContext } from "../component/CookieInstance";

export function Buisness() {
  const [detail, setDetail] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const cookieInstance = cookiesInstance.get("TOKEN");
    console.log(cookieInstance);
    setToken(cookieInstance); // Save token to state
  }, []);

  return (
    <div>
      {/* Ensure that the context is only provided once token is available */}
      {token && (
        <CookieContext.Provider value={{ token: token }}>
        <div className="flex-none w-14"><SideBar  onClick={(e)=>{if(e.current.innerHtml==ProductListing){setDetail(false)}else{setDetail(true)}}}/></div>
          <div className="flex-none w-96">
            {detail ? <ProductListed /> : <ProductListing />}
          </div>
        </CookieContext.Provider>
      )}
      {/* Optionally handle a loading state here if the token is not yet available */}
      {!token && <div>Loading...</div>}
    </div>
  );
}









