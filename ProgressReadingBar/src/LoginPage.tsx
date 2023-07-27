import React from "react";

const LoginPage = () => {
 return (
  <>
   <div className="bg-[url('https://uploads-ssl.webflow.com/5b0886c4be77e07a3437bd81/5b0f2d01a975624815fb6a30_newfocus.jpg')] ">
    <div className="w-full h-screen font-sans bg-cover">
     <div className="container flex items-center justify-center flex-1 h-full mx-auto">
      <div className="w-full max-w-lg">
       <div className="leading-loose">
        <form className="max-w-sm p-10 m-auto rounded-2xl shadow-2xl bg-gray-400/50">
         <p className="mb-8 text-2xl font-light text-center text-white">
          Login
         </p>
         <div className="mb-2">
          <div className=" relative ">
           <input
            type="text"
            id="login-with-bg-email"
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="email"
           />
          </div>
         </div>
         <div className="mb-2">
          <div className=" relative ">
           <input
            type="text"
            id="login-with-bg-password"
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="password"
           />
          </div>
         </div>
         <div className="flex items-center justify-between mt-4">
          <button
           type="submit"
           className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
           Validate
          </button>
         </div>
         <div className="text-center">
          <a
           href="./CreateAccount"
           className="right-0 inline-block text-sm font-light align-baseline text-white hover:text-gray-200"
          >
           Create an account
          </a>
         </div>
        </form>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};

export default LoginPage;
