import { ImStatsDots } from "react-icons/im";
import { IoHomeOutline, IoTimeOutline } from "react-icons/io5";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-geist">
      <div className="navbar bg-base-100 shadow-sm rounded-xl">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-100 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `btn ${isActive ? "bg-[#244d3f] text-white" : ""} btn-ghost w-full justify-start`
                  }
                >
                  <IoHomeOutline className="text-xl" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/timeline"
                  className={({ isActive }) =>
                    `btn ${isActive ? "bg-[#244d3f] text-white" : ""} btn-ghost w-full justify-start`
                  }
                >
                  <IoTimeOutline className="text-xl" />
                  Timeline
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/stats"
                  className={({ isActive }) =>
                    `btn ${isActive ? "bg-[#244d3f] text-white" : ""} btn-ghost w-full justify-start`
                  }
                >
                  <ImStatsDots />
                  Stats
                </NavLink>
              </li>
            </ul>
          </div>

          <NavLink to="/" className="btn normal-case text-2xl">
            <span className="text-[#1f2937]">
              Keen
              <span className="text-[#244d3f]">Keeper</span>
            </span>
          </NavLink>
        </div>

        <div className="navbar-end hidden md:flex lg:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `btn ${isActive ? "bg-[#244d3f] text-white" : ""} btn-ghost mr-1`
            }
          >
            <IoHomeOutline className="text-xl" />
            Home
          </NavLink>

          <NavLink
            to="/timeline"
            className={({ isActive }) =>
              `btn ${isActive ? "bg-[#244d3f] text-white" : ""} btn-ghost mr-1`
            }
          >
            <IoTimeOutline className="text-xl" />
            Timeline
          </NavLink>

          <NavLink
            to="/stats"
            className={({ isActive }) =>
              `btn ${isActive ? "bg-[#244d3f] text-white" : ""} btn-ghost`
            }
          >
            <ImStatsDots />
            Stats
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
