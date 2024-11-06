import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
                  isPending ? "pending" : isActive ? "btn text-green-500 bg-white border-green-500" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bookList"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "btn text-green-500 bg-white border-green-500" : ""
                }
              >
               List of Book
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pageOfRead"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "btn text-green-500 bg-white border-green-500" : ""
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
                  isPending ? "" : isActive ? "btn text-green-500 bg-white border-green-500 -mt-2 hover:bg-white mx-2" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bookList"
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "btn text-green-500 bg-white border-green-500 -mt-2 hover:bg-white mx-2" : ""
                }
              >
               List of Book
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pageOfRead"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "btn text-green-500 bg-white border-green-500 -mt-2 hover:bg-white mx-2" : ""
                }
              >
                Page of Read
              </NavLink>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link><button className="bg-green-400 text-white px-3 py-2 rounded-lg font-medium mr-2">Sign in</button></Link>
        <Link><button className="bg-cyan-500 text-white px-3 py-2 rounded-lg font-medium ">Sign up</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
