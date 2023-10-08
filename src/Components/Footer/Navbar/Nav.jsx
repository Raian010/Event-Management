import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Nav = () => {
   const {user,logout} = useContext(AuthContext);
   console.log(user);
 

   const signOut = () => {
    console.log('Its logged out');
    return logout();
   }

    const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/important">Important</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>
    <li><NavLink to="/register">Register</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           {links}
            </ul>
          </div>
      <img className="w-[150px]" src="https://i.postimg.cc/7P7Smjxq/images.png" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
         {links}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ?
            <p className="flex items-center"><span className="font-bold">{user ?
               <p className="flex items-center">
                <span>
                  <img className={user.photoURL ? 'h-[60px] mr-2 rounded-full bg-gray-400 p-1' : ""} src={user ? user.photoURL : ""} alt="" />
                  </span>
                  <span className="mr-2 bg-blue-200 p-3 rounded-lg">{user.email}</span></p> : "" }
               </span>
               <Link to="/login"><button onClick={signOut} className="btn btn-primary">Logout</button></Link></p> :
            <NavLink to="/login"><button className="btn btn-primary">Login</button></NavLink>
          }
          
        </div>
      </div>
    );
};

export default Nav;