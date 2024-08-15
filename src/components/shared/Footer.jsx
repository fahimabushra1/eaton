import bgEdge1 from "../../assets/images/bgEdge.png"
import chefLogo from "../../assets/images/chefLogoWithoutBG.png"
import caretRight from "../../assets/images/Caret right.png"

const Footer = () => {
    return (
        <div className='bg-[#198754] relative py-12'>
            <h2 className="text-center">enjoy <span>3000+</span>foods from <span>400</span>restaurants</h2>
       
            <div className="flex justify-center items-center"><button className="bg-black rounded-3xl py-1 px-4 text-white inline-flex">order now<img src={caretRight} alt="caret right icon" /></button>
            </div>
            <div className="absolute -top-12 inset-x-96"><img className="" src={chefLogo} alt="chef logo" /></div>
            <div className="absolute top-0"><img src={bgEdge1} alt="bgEdge1 image" /></div>
        </div>
    );
};

export default Footer;