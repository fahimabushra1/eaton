import steamPizza from "../../assets/images/pizza-fire2.png"
import logo1 from "../../assets/images/logo1.png"
import logo2 from "../../assets/images/logo2.png"
import chips from "../../assets/images/pringlesWithoutBG.png"
import deliveryDrone from "../../assets/images/delivery-droneWithoutBG.png"
import bgEdge1 from "../../assets/images/bgEdge.png"
import bgEdge2 from "../../assets/images/bgEdge2.png"
import chefLogo from "../../assets/images/chefLogoWithoutBG.png"
const Delivery = () => {
    return (
        <div>
           <div className="relative py-24 mx-8 bg-slate-900 text-white flex justify-between">
                <div>
                    <h2>fastest food <span>delivery</span> in town</h2>
                    <p>get your dream order fresh steam hot at 20min break time</p>
                </div>
                <div>
                    <div className="flex justify-center items-center gap-2">
                        <div><img src={logo1} alt="logo1" /></div>
                        <div>
                            <h6>air delivery</h6>
                            <p>faster than ever at minimum low charge</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <div><img src={logo2} alt="logo2" /></div>
                        <div>
                            <h6>automated</h6>
                            <p>we process food order based on AI management</p>
                        </div>
                    </div>
                </div>
                <div className="absolute -bottom-16 left-96 z-10">
                    <img src={steamPizza} alt="steam pizza" />
                </div>
                <div className="absolute -top-24 right-12 z-10"><img src={deliveryDrone} alt="drone image" /></div>
                <div className="absolute -top-8 left-4 z-10"><img className="w-20" src={chips} alt="chips image" /></div>
                <div className="absolute -top-8 left-6 z-10"><img className="w-20" src={chips} alt="chips image" /></div>
                <div className="absolute -top-8 left-2 z-10"><img className="w-20" src={chips} alt="chips image" /></div>
                <div className="absolute -top-6 left-8 z-10"><img className="w-20" src={chips} alt="chips image" /></div>
                <div className="absolute -top-6 left-5 z-10"><img className="w-20" src={chips} alt="chips image" /></div>
                <div className="absolute -top-6 left-1 z-10"><img className="w-20" src={chips} alt="chips image" /></div>
                <div className="absolute top-0"><img src={bgEdge1} alt="bgEdge1 image" /></div>
                <div className="absolute bottom-0"><img src={bgEdge2} alt="bgEdge2 image" /></div>
                <div className="absolute top-4 inset-x-96"><img className="" src={chefLogo} alt="chef logo" /></div>
           </div>
              
        </div>
    );
};

export default Delivery;