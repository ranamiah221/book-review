import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
   const {userSignIn}=useContext(AuthContext);
    
    const handleSignIn=(event)=>{
        event.preventDefault();
        const form= event.target;
        const email=form.email.value;
        const password= form.password.value;
        console.log(email, password);
        userSignIn(email, password)
        .then(result=>{
          const user=result.user;
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.email} login Successfully.`,
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch(error=>{
          const errorMassage=error.message.split('/')[1].replace(')','');
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: `${errorMassage}`,
            showConfirmButton: false,
            timer: 1500
          });
        })
    }
  return (
    <div className="flex justify-center mt-5">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 border
      bg-[#1313130D]">
        <div className="mb-8 text-center ">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm ">
            Sign in to access your account
          </p>
        </div>
        <form onSubmit={handleSignIn}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline "
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md mb-5"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-green-400"
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center">
              Don't have an account yet ? 
              <Link
               to='/signUp'
                className="hover:underline  font-medium text-blue-500"
              >
                Sign up
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
