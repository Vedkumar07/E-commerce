import { useState } from "react";
import { Signin, Signup } from "../component/BusinessAuthpg";

export function BuisnessAuth(){
    const[state,setState]=useState(false);
    return<div>
        <div className="flex flex-row">
            <button onClick={(e)=>{setState(true)}}>Signup  </button>
            <button onClick={(e)=>{setState(false)}}>  Signin</button>
        </div>
        <div className="justify-center">
            {state==true?<Signup />:<Signin/>}
        </div>
    </div>
}