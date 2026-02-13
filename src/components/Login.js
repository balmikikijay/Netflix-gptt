import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signInForm, setSignInForm]=useState(true)

  const togglesignform=()=>{
    console.log("hellow")
    setSignInForm(!signInForm)
  }
  return (
    <div className="relative h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_small.')] bg-fixed bg-center bg-cover">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      {/* Header logo on top */}
      <div className="relative   pt-4">
        <Header />
      </div>
      {/* Page content */}
      
     <div className=" rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-black bg-opacity-60 flex  z-20  flex-col">
     <div className="relative mt-20 ml-12 text-2xl font-bold text-white">
      <h3>{signInForm ? "Sign in":"Sign up"}</h3>
     </div>
  <form className=" mt-4   flex flex-col justify-center items-center">
     {!signInForm && ( <input type="text" placeholder="Full name" className=" text-white p-2 m-2 bg-transparent border-2 w-72 rounded " />)}
    <input type="email" placeholder="Email or Mobile Number" className=" text-white p-2 m-2 bg-transparent border-2 w-72 rounded " />
    <input type="password" placeholder="Password" className="text-white p-2 m-2 bg-transparent border-2 w-72 rounded  " />
    <button className="mt-1 bg-red-700 w-72 h-10 rounded l">{signInForm ? "Sign in":"Sign up"}</button>
    <p className="py-4 text-white cursor-pointer" onClick={togglesignform}>{signInForm ? "New to netflix ? sign up Now": "Allready registered  sign in now"}</p>
  </form>
</div>

    </div>
  );
};
export default Login;
