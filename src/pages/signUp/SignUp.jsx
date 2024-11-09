import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../components/Provider/AuthProvider/AuthProvider';

const SignUp = () => {
  const {createUser}=useContext(AuthContext);
    const handleSignUp=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email, password);
        createUser(email, password)
        .then(result=>{
          console.log(result.user)
        })
        .catch(error=>{
          console.log(error)
        })
    }
    return (
        <div className="flex justify-center mt-5">
        <div className="flex flex-col p-6 rounded-md bg-[#1313130D] border w-1/2">
          <div className="mb-8 text-center ">
            <h1 className="my-3 text-4xl font-bold">Sign up</h1>
            <p className="text-sm">
              Sign up to create your account
            </p>
          </div>
          <form onSubmit={handleSignUp} className="space-y-12">
            <div className="space-y-4">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  User Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="name"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            
              <div>
                <label htmlFor="photo" className="block mb-2 text-sm">
                  Photo url
                </label>
                <input
                  type="text"
                  name="photoURL"
                
                  placeholder="Photo url"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  className="w-full px-3 py-2 border rounded-md "
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 font-semibold rounded-md bg-purple-500"
                >
                  Sign up
                </button>
              </div>
              <p className="px-6 text-sm text-center">
                Don't have an account yet?
                <Link
                  to='/signIn'
                  className="hover:underline font-medium"
                >
                  Sign In
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    );
};

export default SignUp;