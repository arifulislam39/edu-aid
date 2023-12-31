import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const NavBar = () => {
  const { logOut, user } = useContext(AuthContext);


  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/colleges">Colleges</Link>
      </li>
      <li>
        <Link to="/admission">Admission</Link>
      </li>
      <li>
        <Link to="/myCollege">My College</Link>
      </li>
      {user && (
            <>
              {/* <li>
                <Link to="/dashboard">Dashboard</Link>
              </li> */}
              <li>
                <button onClick={handleLogout}>LogOut</button>
              </li>
            </>
          )}
    </>
  );

  


  return (
    <div className="navbar bg-red-400 fixed z-30 top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">eduAid</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1"> {navItems}</ul>
      </div>
      <div className="navbar-end sm:flex">
            {user ? (
              <div>
                <Link to=""> <h2 className="btn btn-ghost normal-case text-xl">{user.displayName}</h2></Link>
               
              </div>
            ) : (
              <Link to="/login">
                <button className="btn bg-[#ccb035]">Login</button>
              </Link>
            )}
          </div>
    </div>
  );
};

export default NavBar;
