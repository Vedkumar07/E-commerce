import { set } from "mongoose";
import { useState } from "react"
import axios from "axios"
import { Signin, Signup } from "../component/AuthPage";

export function AuthPage(){
    const[login,setLogin]=useState(false);
    //window.location.href="/LandingPage";
    return<div>
        <div className="flex flex-row">
            <button onClick={(e)=>{setLogin(true)}}>Signup  </button>
            <button onClick={(e)=>{setLogin(false)}}>  Signin</button>
        </div>
        <div className="justify-center">
            {login==true?<Signup />:<Signin/>}
        </div>
    </div>
      }
      