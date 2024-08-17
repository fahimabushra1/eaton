import steamPizza from "../../assets/images/pizza-fire2.png"
import logo1 from "../../assets/images/logo1.png"
import logo2 from "../../assets/images/logo2.png"
import deliveryDrone from "../../assets/images/delivery-droneWithoutBG.png"
import bgEdge1 from "../../assets/images/bgEdge.png"
import bgEdge2 from "../../assets/images/bgEdge2.png"
import chefLogo from "../../assets/images/chefLogoWithoutBG.png"
const Delivery = () => {
    return (
        <div>
           <div className="relative py-24 mx-8 bg-black text-white flex justify-between my-4">
                <div className="ml-24">
                    <h2 className="text-3xl font-bold">Fastest food <br /> <span className="text-orange-500">Delivery</span> in town</h2>
                    <p className="text-sm mt-4">get your dream order fresh steam <br /> hot at 20min break time</p>
                </div>
                <div className="ml-16"><img src={chefLogo} alt="chef logo" /></div>
                <div className="mt-24 mr-24">
                    <div className="flex justify-center items-center gap-2">
                        <div><img src={logo1} alt="logo1" /></div>
                        <div>
                            <strong>air delivery</strong>
                            <p className="text-sm">faster than ever at <br /> minimum low charge</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 ml-6 mt-8">
                        <div><img src={logo2} alt="logo2" /></div>
                        <div>
                            <strong>automated</strong>
                            <p className="text-sm">we process food order <br /> based on AI management</p>
                        </div>
                    </div>
                </div>
                <div className="absolute -bottom-16 left-96 z-10 shadow-amber-700 shadow-2xl">
                    <img className="shadow-2xl shadow-slate-600" src={steamPizza} alt="steam pizza" />
                </div>
                <div className="absolute -top-24 right-12 z-10"><img src={deliveryDrone} alt="drone image" /></div>
                <div className="absolute top-0"><img src={bgEdge1} alt="bgEdge1 image" /></div>
                <div className="absolute bottom-0"><img src={bgEdge2} alt="bgEdge2 image" /></div>
               
           </div>
              
        </div>
    );
};

export default Delivery;