import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import GoogleIcon from '../../assets/google.png';
import GithubIcon from '../../assets/github.png';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
   const {LogIn, googleLogin, githubLogin} = useContext(AuthContext)
   const navigate = useNavigate()

   const handleLogin = e => {
      e.preventDefault()
      const form = new FormData(e.currentTarget)
      const email = form.get('email')
      const password = form.get('password')

      LogIn(email, password)
         .then(() => {
            navigate('/')
         })
         .catch(error => console.log(error.message))
   }

   const handleGoogleLogin = () => {
      const googleProvider = new GoogleAuthProvider()
      googleLogin(googleProvider)
      .then(() => {
         navigate('/')
      })
      .catch(error => console.log(error.message))
   }
   const handleGithubLogin = () => {
      const githubProvider = new GithubAuthProvider()
      githubLogin(githubProvider)
      .then(() => {
         navigate('/')
      })
      .catch(error => console.log(error.message))
   }

   return (
      <div className="bg-[#F3F3F3] min-h-screen">
         <div className="max-w-[85%] mx-auto">
            <Navbar></Navbar>
            <div className="py-12">
               <div className="w-1/2 mx-auto bg-white p-16">
                  <h2 className="text-3xl font-medium text-primary text-center">Login your account</h2>
                  <hr className="my-10" />
                  <form onSubmit={handleLogin}>
                     <div className="space-y-5">
                        <div>
                           <label className="font-medium text-primary">Email address</label>
                           <input type="email" name="email" placeholder="Enter your email address" className="w-full p-4 bg-[#F3F3F3] mt-2 rounded" />
                        </div>
                        <div className="mt-6">
                           <label className="font-medium text-primary">Password</label>
                           <input type="password" name="password" placeholder="Enter your password" className="w-full p-4 bg-[#F3F3F3] mt-2 rounded" />
                        </div>
                        <button className="text-white bg-primary py-2.5 px-6 font-medium w-full rounded">Login</button>
                        <p className="text-center text-[#706F6F] font-medium">Do not have an account ? <Link id="reg-btn" to="/register">Register</Link></p>
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

export default Login;