import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./../components/Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const { user, logOut } = useContext(AuthContext);


  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("forest");
    } else {
      setTheme("light");
    }
  };
  const handleLogOut=()=>{
    logOut()
    .then(()=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `log Out Successfully.`,
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch(()=>{
    })
  }
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "btn text-green-500 bg-white border-green-500"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bookList"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "btn text-green-500 bg-white border-green-500"
                    : ""
                }
              >
                List of Book
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pageOfRead"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "btn text-green-500 bg-white border-green-500"
                    : ""
                }
              >
                Page of Read
              </NavLink>
            </li>
          </ul>
        </div>
        <h2 className="text-xl font-bold ">Book Vibe</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "btn text-green-500 bg-white border-green-500 -mt-2 hover:bg-white mx-2"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bookList"
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "btn text-green-500 bg-white border-green-500 -mt-2 hover:bg-white mx-2"
                  : ""
              }
            >
              List of Book
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pageOfRead"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "btn text-green-500 bg-white border-green-500 -mt-2 hover:bg-white mx-2"
                  : ""
              }
            >
              Page of Read
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <p className="uppercase bg-slate-700 text-white p-2 rounded-lg mr-2 shadow-lg">
              {user.email.slice(0, 2)}
            </p>
            <button onClick={handleLogOut} className="bg-[#23BE0A] text-white px-3 py-2 rounded-lg font-medium mr-2">
              Sign Out
            </button>
          </>
        ) : (
          <NavLink to="signIn">
            <button className="bg-[#23BE0A] text-white px-3 py-2 rounded-lg font-medium mr-2">
              Sign in
            </button>
          </NavLink>
        )}

        <NavLink to="signUp">
          <button className="bg-cyan-500 text-white px-3 py-2 rounded-lg font-medium mr-2">
            Sign up
          </button>
        </NavLink>
        <label className="grid cursor-pointer place-items-center">
          <input
            onChange={handleTheme}
            type="checkbox"
            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1 "
          />
          <svg
            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
