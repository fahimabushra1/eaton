import useAuth from "../../hooks/useAuth";
import { FaGooglePlus } from "react-icons/fa6";

const GoogleLogin = () => {
    const {googleSignIn} = useAuth();
    const handleGoogleSignIn=()=>{
        googleSignIn().then((data)=>{
if(data?.user?.email){
    const userInfo = {
        email:data?.user?.email,
        name:data?.user?.displayName
    }
    console.log(userInfo)
    fetch('http://localhost:5000/user',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
            body: JSON.stringify(userInfo),
    })
    .then(res=>res.json())
    .then(data=>{
        localStorage.setItem('token', data?.token)
    })
}
        })
    }
    return (
        <div>
        <button onClick={handleGoogleSignIn} className="text-white rounded-full text-4xl bg-red-500">
        <FaGooglePlus />
        </button>
    </div>
    );
};

export default GoogleLogin;