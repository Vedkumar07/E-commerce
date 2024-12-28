import { set } from "mongoose";
import { useState } from "react"
import axios from "axios"
import Cookies from "universal-cookie";

const cookies = new Cookies();

export function Signup(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [register,setRegister]=useState(false);
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const configuration = {
          method: "post",
          url: "http://localhost:30036/user/signup",
          data: {
            email,
            password,
            firstName,
            lastName,
          },
        };
        axios(configuration)
          .then((result) => {
            console.log(result);
            setRegister(true);
            console.log(register);
            window.location.href="/auth";
            console.log("Signin now");
          })
          .catch((error) => {
            console.log(error);
          });
      };
      {register?(
        <p className="text-success">You are Registered success</p>
      ):(
        <p className="text-danger">Not Register</p>
      )}
         return (
          <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                  alt="Your Company"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                  Signup in to your account
                </h2>
              </div>
      
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
      
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                        Password
                      </label>
                      <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        autoComplete="current-password"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                        firstNmae
                      </label>
                      <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                          Forget firstName?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="firstName"
                        name="firstName"
                        type="firstName"
                        required={firstName}
                        onChange={(e)=>{setFirstName(e.target.value)}}
                        autoComplete="current-password"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                         lastName
                      </label>
                      <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                          Forgot lastName?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="lastName"
                        name="astName"
                        type="astName"
                        required={lastName}
                        onChange={(e)=>{setLastName(e.target.value)}}
                        autoComplete="current-password"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
      
                  <div>
                    <button
                      type="submit"
                      onClick={(e)=>{handleSubmit(e)}}
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Signup
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        )
      }

      export function Signin(){
        const[email,setEmail]=useState("");
        const[password,setPassword]=useState("");
        const[register,setRegister]=useState(false);
        const handleSubmit=(e)=>{
            e.preventDefault();
            const configration={
                method:"post",
                url:"http://localhost:30036/user/signin",
                // headers:{
                //   "Authorization": `Bearer ${token}`, // Pass the token in the header
                //   "Content-Type": "application/json",
                // },
                data:{
                    email,
                    password
                },
            };
        axios(configration)
          .then((result) => {
            console.log(result);
            document.cookie=`TOKEN=${result.data.token}`
            //document.cookie='dark mode=true;path=/'
            setRegister(true);
            window.location.href="/";
          })
          .catch((error) => {
            console.log(error);
          });
        }
        return (
              <>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                      alt="Your Company"
                      src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                      className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                      Sign-in to your account
                    </h2>
                  </div>
          
                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">
                      <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            autoComplete="email"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          />
                        </div>
                      </div>
          
                      <div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                            Password
                          </label>
                          <div className="text-sm">
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                              Forgot password?
                            </a>
                          </div>
                        </div>
                        <div className="mt-2">
                          <input
                            id="password"
                            name="password"
                            type="password"
                            required={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            autoComplete="current-password"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          />
                        </div>
                      </div>
          
                      <div>
                        <button
                          type="submit"
                          onClick={(e)=>{handleSubmit(e)}}
                          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </>
            )
          }
      