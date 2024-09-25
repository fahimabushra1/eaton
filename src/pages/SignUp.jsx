import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/login-registration/GoogleLogin";
import { useEffect } from "react";
import salad from "../assets/images/sALADwITHOUTImg.png"
import burger from "../assets/images/burgerWithoutBG1.png"
import pizza from "../assets/images/pizzaWithout bg.png"
// import veggies from "../assets/images/veggiesWithoutBG.png"
import useAuth from "../hooks/useAuth";
// import FbLogin from "../components/login-registration/FbLogin";
import toast from "react-hot-toast";
import { PiChefHatBold } from "react-icons/pi";

const Register = () =>{
  const {createUser,user}= useAuth();
  console.log(user)
// const [passMatch, setPassMatch]= useState();

 const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || '/'

const handleSubmit= async(e)=>{
  e.preventDefault();

  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;
  console.log(name,email,password,confirmPassword)


  if(password != confirmPassword){
    // setPassMatch(true);
    toast.error("password don't match")
  }

  if(password==confirmPassword){
     await createUser(email,password).then((data)=>{
      if(data?.user?.email){
          const userInfo = {
              email:data?.user?.email,
              name:name,
          }
          fetch('http://localhost:5000/user',{
              method:"POST",
              headers:{
                  "Content-Type":"application/json",
                },
                  body: JSON.stringify(userInfo),
          })
          .then(res=>res.json())
          .then(data=>console.log(data))
      }
              })
     }
  }


useEffect(()=>{
  if(user){
    navigate(from,{replace:true})
  }
},[user,navigate,from])


    return(
      <>
      {/* <div className="hero min-h-screen -mt-20"> */}
<div className="hero-content flex-col lg:flex-row-reverse gap-12">
<div className="text-center lg:text-left">
 <h1 className="text-5xl font-bold mb-2">Create Account</h1>
 <p className="font-bold text-xl mb-8">What you will get?</p>
 <div className="flex justify-center items-center -ml-24">
  <div><PiChefHatBold className="text-red-500"/></div>
  <div><p>Manage your order the easiest way</p></div>
 </div>
 <div className="flex justify-start items-center">
  <div><PiChefHatBold className="text-red-500"/></div>
  <div>Share your happiness with your loved ones</div>
 </div>
 <div className="flex justify-center items-center">
  <div><PiChefHatBold className="text-red-500"/></div>
  <div>More than 12000 restaurant around the country</div>
 </div>
 <div className="flex justify-center items-center -ml-28">
  <div><PiChefHatBold className="text-red-500"/></div>
  <div>Easy search restaurants near you</div>
 </div>
 <div className="flex justify-center items-center -ml-9">
  <div><PiChefHatBold className="text-red-500"/></div>
  <div>Delivery in 30 minutes all over the country</div>
 </div>
</div>
<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
 <form onSubmit={handleSubmit} className="card-body">
  <div className="form-control">
     <label className="label">
       <span className="label-text">Name</span>
     </label>
     <input type="name" name="name" placeholder="your name" className="input input-bordered" required />
     </div>
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
     </div>
     <div className="form-control">
     <label className="label">
       <span className="label-text">Confirm Password</span>
     </label>
     <input type="password" name="confirmPassword" placeholder="confirm password" className="input input-bordered" required />
     </div>
     
     {
<toast/>
      //  passMatch && 
      //  (<div className="my-2">
      //      <p className="text-red-500">Passwords do not match</p>
      //    </div>)

      }
     <label className="label">
       <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
     </label>
   <div className="form-control mt-6">
     <button className="btn btn-primary"><Link to='/home'>Sign Up</Link></button>
   </div>
   <div className="mt-6">
     <GoogleLogin/>
     {/* <FbLogin/> */}
   </div>
 </form>
</div>
</div>
{/* </div> */}
<div>
        <img className="w-72 absolute bottom-0 left-36 -z-10" src={salad} alt="salad" />
        <img className="w-80 absolute top-44 right-0 -z-10" src={pizza} alt="pizza" />
        <img className="w-40 absolute top-20 left-0" src={burger} alt="burger" />
        {/* <img className="w-40 absolute top-8 right-96 -z-10" src={veggies} alt="veggies" /> */}
      </div> 
   </>
    );
};

export default Register;