import { ImStatsDots } from "react-icons/im";
import { IoHomeOutline, IoTimeOutline } from "react-icons/io5";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <div className="container mx-auto font-geist">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <NavLink to="/" className="btn normal-case text-2xl">
            <span className="text-[#1f2937]">
              Keen
              <span className="text-[#244d3f]">Keeper</span>
            </span>
          </NavLink>
        </div>
        <div className="navbar-end">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return `btn ${isActive ? "bg-[#244d3f] text-white" : ""} btn-ghost mr-1`;
            }}
          >
            <IoHomeOutline className="text-xl"></IoHomeOutline>
            Home
          </NavLink>
          <NavLink
            to="/timeline"
            className={({ isActive }) => {
              return `btn ${isActive ? "bg-[#244d3f] text-white" : ""} btn-ghost mr-1`;
            }}
          >
            <IoTimeOutline className="text-xl"></IoTimeOutline>
            Timeline
          </NavLink>
          <NavLink
            to="/stats"
            className={({ isActive }) => {
              return `btn ${isActive ? "bg-[#244d3f] text-white" : ""} btn-ghost`;
            }}
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
