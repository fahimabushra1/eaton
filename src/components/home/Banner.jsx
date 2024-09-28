import avatar from "../../assets/images/Avatar.png";
// import bannerImage from "../../assets/images/bannerImage.png";
import logo1 from "../../assets/images/logo1.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo-4.png";
import search from "../../assets/images/search.png";
import playIcon from "../../assets/images/Play icons.png";
import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="grid grid-cols-3 mt-12">
           <div className="ml-6">
                 <div className="text-7xl font-bold capitalize ">
                    <h1>fastest <br /> <span className="text-orange-500">delivery</span> and <br /> easy <span className="text-orange-500">pickup</span></h1>
                 </div>
                 <div className="flex justify-center items-center gap-2 mt-8">
                    <div>
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">When you are too lazy to cook, <br />
                        we are just a click away!</p>
                    </div>
                 </div>
                 <div className="flex justify-center items-center gap-4 mt-4">
                     <div className="btn bg-[#198754] text-white p-4 rounded-3xl"><button className="inline-flex"><img className="border-r-2 border-white self-center mr-2" src={search} alt="search icon" /><Link to={"dashboard"}></Link>Find Restaurants</button></div>
                    
                     <div className="px-4 py-1 rounded-3xl">
                          <img className="inline-flex" src={playIcon} alt="video player icon" />
                          <button className="font-bold">how to order</button></div>
                    </div>
            </div>
            <div>
                 {/* <img src={bannerImage} alt="banner image" /> */}
            </div>
            <div className="ml-4">
                <div className="flex justify-center items-center gap-2">
                     <div><img src={logo1} alt="logo1" /></div>
                     <div>
                        <strong>first delivery</strong>
                        <p className="text-xs">promise to deliver <br /> within 30minutes</p>
                     </div>
                </div>
                <div className="flex justify-center items-center m-8 gap-2">
                 <div><img src={logo4} alt="logo4" /></div>
                 <div>
                 <strong>pick up</strong>
                 <p className="text-xs">Pickup deliver at <br /> your door step</p>
                 </div>
                </div>
                <div className="flex justify-center items-center gap-2">
                 <div><img src={logo3} alt="logo3" /></div>
                 <div>
                 <strong>dine in</strong>
                 <p className="text-xs">Enjoy your food <br /> fresh crispy and hot</p>
                 </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;