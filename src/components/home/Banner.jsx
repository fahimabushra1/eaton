import avatar from "../../assets/images/Avatar.png";
import bannerImage from "../../assets/images/bannerImage.png";
import logo1 from "../../assets/images/logo1.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo-4.png";


const Banner = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
           <div>
                 <div>
                    <h1>fastest <span>delivery</span> and easy <span>pickup</span></h1>
                 </div>
                 <div className="flex justify-center items-center gap-2">
                    <div>
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div>
                        <p>when you are too lazy to cook, <br />
                        we are just a click away!</p>
                    </div>
                 </div>
                 <div>
                     <div></div>
                     <div></div>
                 </div>
            </div>
            <div>
                 <img src={bannerImage} alt="banner image" />
            </div>
            <div>
                <div className="flex justify-center items-center gap-2">
                     <div><img src={logo1} alt="logo1" /></div>
                     <div>
                        <h6>first delivery</h6>
                        <p></p>
                     </div>
                </div>
                <div className="flex justify-center items-center gap-2">
                 <div><img src={logo4} alt="logo4" /></div>
                 <div>
                 <h6>pick up</h6>
                 <p></p>
                 </div>
                </div>
                <div className="flex justify-center items-center gap-2">
                 <div><img src={logo3} alt="logo3" /></div>
                 <div>
                 <h6>dine in</h6>
                 <p></p>
                 </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;