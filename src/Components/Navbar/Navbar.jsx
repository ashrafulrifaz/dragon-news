import { Link, NavLink } from "react-router-dom";
import userImage from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";

const Navbar = () => {
   const {user} = useContext(AuthContext)

   const handleLogOut = () => {
      signOut(auth)
      .then(() => console.log('log out successful'))
      .catch(error => console.log(error.message))
   }

   return (
      <div className="grid grid-cols-3 gap-3 py-8">
         <div></div>
         <div>
            <ul className="flex gap-5 justify-center items-center text-second">
               <li>
                  <NavLink to="/" className="pl-0">Home</NavLink>
               </li>
               <li>
                  <NavLink to="/about" className="pl-0">About</NavLink>
               </li>
               <li>
                  <NavLink to="/career" className="pl-0">Career</NavLink>
               </li>
            </ul>
         </div>
         <div className="flex justify-end gap-2 items-center">
            <img src={userImage} className="w-9 h-9" alt="" />
            {user ? <button  className="text-white bg-primary py-1 px-6 font-medium" onClick={handleLogOut}>Log Out</button> 
                     :
                   <Link to="/login" className="text-white bg-primary py-1 px-6 font-medium">Login</Link>}
         </div>
      </div>
   );
};

export default Navbar;