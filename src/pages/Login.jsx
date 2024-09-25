import {  useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/login-registration/GoogleLogin";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import salad from "../assets/images/sALADwITHOUTImg.png"
import burger from "../assets/images/burgerWithoutBG1.png"
import pizza from "../assets/images/pizzaWithout bg.png"
// import FbLogin from "../components/login-registration/FbLogin";


const Login = () => {
  const {signIn, user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(user?.email)
  const from = location?.state?.from?.pathname || '/'
  const handleSubmit= (e)=>{
    e.preventDefault();

    const form = e.target;
 const email = form.email.value;
 const password = form.password.value;
 console.log(email, password);
  signIn(email,password);
 }  

useEffect(()=>{
  if(user){
    navigate(from,{replace:true})
  }
},[user,navigate,from])


    return (
        <>
        <div className="hero min-h-screen -mt-20">
        <div className="hero-content flex-row lg:flex-row-reverse gap-8">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-2">Login</h1>
            <p>More than <span className="text-blue-600 font-bold">20,000</span> users from around the country!</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-16">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="mt-6">
         <GoogleLogin/>
         {/* <FbLogin/> */}
        </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <img className="w-60 absolute bottom-24 left-52 -z-10" src={salad} alt="salad" />
        <img className="w-80 absolute top-10 right-0" src={pizza} alt="pizza" />
        <img className="w-40 absolute top-20 left-0" src={burger} alt="burger" />
      </div>
      </>
    );
};

export default Login;