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
        <div className='bg-[#198754] relative mx-8'>
          <div className="flex justify-center items-center"><img className="w-32 -mt-12 z-10" src={chefLogo} alt="chef logo" /></div>
            <h2 className="text-center">enjoy <span>3000+</span>foods from <span>400</span>restaurants</h2>
       
            <div className="flex justify-center items-center"><button className="bg-black rounded-3xl py-1 px-4 text-white inline-flex">order now<img src={caretRight} alt="caret right icon" /></button>
            </div>
            <div className="absolute top-0"><img src={bgEdge1} alt="bgEdge1 image" /></div>
            <div className="absolute top-2 right-4"><img src={domino} alt="domino logo" /></div>
            <div className="absolute top-12 right-6"><img src={pizzaHut} alt="pizza hut logo" /></div>
            <div className="absolute bottom-4 left-0"><img src={macdonald} alt="macdonald logo" /></div>
            <div className="absolute top-6 left-6"><img src={burgerKing} alt="burger king logo" /></div>
            <div className="absolute top-4 left-3"><img src={kfc} alt="kfc logo" /></div>
            <div className="absolute top-4 right-8"><img src={subWay} alt="subway logo" /></div>
            <div className="grid grid-cols-3 gap-4 bg-black mx-12 text-white pt-6 rounded-t-3xl">
                <div>eaton</div>
                <div></div>
                <div><img src={socialIcons} alt="social media icons" /></div>
            </div>
        </div>
    );
};

export default Footer;