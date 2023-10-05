import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import GoogleIcon from '../../assets/google.png';
import GithubIcon from '../../assets/github.png';

const Register = () => {
   const {createUser, googleLogin, githubLogin} = useContext(AuthContext)
   const navigate = useNavigate()

   const handleFormSubmit = e => {
      e.preventDefault()
      const form = new FormData(e.currentTarget)
      const name = form.get('name')
      const photo = form.get('photo')
      const email = form.get('email')
      const password = form.get('password')
      
      createUser(email, password)
         .then(() => navigate('/login'))
         .catch(error => console.log(error.message))
   }

   const handleGoogleLogin = () => {
      googleLogin()
   }

   const handleGithubLogin = () => {
      githubLogin()
   }

   return (
      <div className="bg-[#F3F3F3] min-h-screen">
         <div className="max-w-[85%] mx-auto">
            <Navbar></Navbar>
            <div className="py-12">
               <div className="w-1/2 mx-auto bg-white p-16">
                  <h2 className="text-3xl font-medium text-primary text-center">Register your account</h2>
                  <hr className="my-10" />
                  <form onSubmit={handleFormSubmit}>
                     <div className="space-y-5">
                        <div>
                           <label className="font-medium text-primary">Your Name</label>
                           <input name="name" type="text" placeholder="Enter your email name" className="w-full p-4 bg-[#F3F3F3] mt-2 rounded focus:outline-none" />
                        </div>
                        <div>
                           <label className="font-medium text-primary">Photo URL</label>
                           <input name="photo" type="text" placeholder="Enter your photo url" className="w-full p-4 bg-[#F3F3F3] mt-2 rounded focus:outline-none" />
                        </div>
                        <div>
                           <label className="font-medium text-primary">Email Address</label>
                           <input name="email" type="email" placeholder="Enter your email address" className="w-full p-4 bg-[#F3F3F3] mt-2 rounded focus:outline-none" />
                        </div>
                        <div className="mt-6">
                           <label className="font-medium text-primary">Password</label>
                           <input name="password" type="password" placeholder="Enter your password" className="w-full p-4 bg-[#F3F3F3] mt-2 rounded focus:outline-none" />
                        </div>
                        <div className="mt-6 flex items-center gap-2.5">
                           <input id="terms" type="checkbox" placeholder="Enter your password" className="w-5 h-5 p-4 bg-[#F3F3F3] rounded focus:outline-none" />
                           <label htmlFor="terms" className="text-primary">Accept <a href="#" className="font-medium hover:underline">Term & Conditions</a></label>
                        </div>
                        <button className="text-white bg-primary py-2.5 px-6 font-medium w-full rounded">Register</button>
                        <p className="text-center text-[#706F6F] font-medium">Already have an account ? <Link id="reg-btn" to="/login">Login</Link></p>
                        <div className="flex gap-3">
                           <button onClick={handleGoogleLogin} className="text-blue-500 font-medium border border-blue-500 rounded py-1 w-full flex gap-2 items-center justify-center"><img src={GoogleIcon} className='w-4' /><span>Login with Google</span></button>
                           <button onClick={handleGithubLogin} className="text-primary font-medium border border-primary rounded py-1 w-full flex gap-2 items-center justify-center"><img src={GithubIcon} className='w-4' /><span>Login with Github</span></button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;