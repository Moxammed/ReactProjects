import { ChangeEvent, useState } from "react";

export default function SigninPage() {
 const [signInEmail, setSignInEmail] = useState("");
 const [signInPassword, setSignInPassword] = useState("");
 const [loading, setLoading] = useState(false);
 const [errorMessage, setErrorMessage] = useState("");

 function handleSignInEmailFieldChange(event: ChangeEvent<HTMLInputElement>) {
  event.preventDefault();
  setSignInEmail(event.target.value);
 }

 function handleSignInPasswordFieldChange(
  event: ChangeEvent<HTMLInputElement>
 ) {
  event.preventDefault();
  setSignInPassword(event.target.value);
 }

 async function handleSignIn(event) {
  event.preventDefault();
  setErrorMessage("");
  setLoading(true);

  try {
   // Sign In logic using signInEmail and signInPassword state
   setErrorMessage("There was an error signing in");
   setLoading(false);
  } catch (err) {
   // Remediation logic
   setErrorMessage("There was an error signing in");
   setLoading(false);
  }
 }

 return (
  <div className="flex flex-col items-center justify-center text-center">
   <div className="lg:w-2/5 md:w-3/5 w-4/5">
    <label className="mt-6">Email address</label>
    <input
     type="email"
     className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
     placeholder=""
     value={signInEmail}
     onChange={(e) => handleSignInEmailFieldChange(e)}
    />
    <label className="mt-6">Password</label>
    <input
     type="password"
     className="mt-1 w-full rounded-xl border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
     placeholder=""
     value={signInPassword}
     onChange={(e) => handleSignInPasswordFieldChange(e)}
    />
    <button
     className={`
            bg-white mt-6 border rounded-xl border-gray-300 p-2 hover:bg-purple-500 hover:text-white
            ${loading ? "bg-purple-500 text-white animate-pulse" : ""}
          `}
     disabled={loading}
     onClick={handleSignIn}
    >
     Sign In
    </button>
    <p className="text-red-900">{errorMessage}</p>
   </div>
  </div>
 );
}
