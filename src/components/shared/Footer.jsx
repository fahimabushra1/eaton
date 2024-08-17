import bgEdge1 from "../../assets/images/bgEdge.png"
import chefLogo from "../../assets/images/chefLogoWithoutBG.png"
import caretRight from "../../assets/images/Caret right.png"
import pizzaHut from "../../assets/images/Pizza-hut.png"
import domino from "../../assets/images/domino.png"
import macdonald from "../../assets/images/macdonald.png"
import burgerKing from "../../assets/images/burger-icon.png"
import kfc from "../../assets/images/Kfc.png"
import subWay from "../../assets/images/sUBWAY.png"
import socialIcons from "../../assets/images/Social-icons.png"

const Footer = () => {
    return (
        <div className='bg-[#198754] relative mx-8 mt-24 mb-2'>
          <div className="flex justify-center items-center"><img className="w-32 -mt-12 z-10" src={chefLogo} alt="chef logo" /></div>
            <h2 className="text-center text-white text-3xl font-bold">Enjoy <span className="text-black">3000+</span>foods from <br /> <span className="text-orange-500">400</span> Restaurants</h2>
            <div className="flex justify-center items-center mt-4 mb-8"><button className="bg-black rounded-3xl py-1 px-4 text-white inline-flex shadow-2xl shadow-black">order now<img className="self-center" src={caretRight} alt="caret right icon" /></button>
            </div>
            <div className="w-24 mx-auto rotate-45 mb-8"><img src={macdonald} alt="macdonald logo" /></div>
            <div className="absolute top-0"><img src={bgEdge1} alt="bgEdge1 image" /></div>
            <div className="absolute w-24 top-24 right-40"><img src={domino} alt="domino logo" /></div>
            <div className="absolute w-24 top-52 right-32"><img src={pizzaHut} alt="pizza hut logo" /></div>
           
            <div className="absolute w-24 top-24 left-40"><img src={burgerKing} alt="burger king logo" /></div>
            <div className="absolute w-24 top-52 left-72"><img src={kfc} alt="kfc logo" /></div>
            <div className="absolute w-24 top-32 right-72"><img src={subWay} alt="subway logo" /></div>
            <div className="flex justify-between items-center gap-4 bg-black mx-12 text-white py-6 px-4 rounded-t-3xl">
                <div><p className="text-3xl font-bold">Eaton</p></div>
                <div><p>Copyright © <span className="text-orange-500">{new Date().getFullYear()}</span> - All right reserved</p></div>
                <div><img src={socialIcons} alt="social media icons" /></div>
            </div>
        </div>
    );
};

export default Footer;