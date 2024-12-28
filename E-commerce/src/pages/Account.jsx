import { useState } from "react";
import { AddToCart } from "../component/AddToCart";
import {Purchese} from "../component/Purchese"

export function Account(){
    const[use,setUse]=useState(false);
    return<div>
        <div className="flex flex-row">
            <button onClick={(e)=>{setUse(false)}}>Purchesed</button>
            <button onClick={(e)=>{setUse(true)}}>Cart</button>
        </div>
        <div>
            {use==true?<AddToCart />:<Purchese />}
        </div>
    </div>
}