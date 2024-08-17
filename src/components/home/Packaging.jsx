import packed1 from "../../assets/images/Packed 1.png"
import packed2 from "../../assets/images/Packed 2.png"
import packed3 from "../../assets/images/Packed 3.png"
import cookingEggWithoutBG from "../../assets/images/cookingEggWithoutBG.png"

const Packaging = () => {
    return (
        <div className="relative mt-32">
           <h1 className="text-3xl font-bold text-center">How we <span className="text-orange-500">Serve</span> you</h1>
           <div className="grid grid-cols-3 mt-12 ml-20">
                 <div>
                    <img src={packed1} alt="packed1" />
                    <p className="text-sm text-center mr-28">100% environment friendly <br /> packaging</p>
                 </div>
                 <div>
                    <img src={packed2} alt="packed2" />
                    <p className="text-sm text-center mr-28">we deliver the best <br /> experiences</p>
                 </div>
                 <div>
                    <img src={packed3} alt="packed3" />
                    <p className="text-sm text-center mr-24">promise to deliver within <br /> 30 minutes</p>
                 </div>
           </div>
           <div className="absolute -top-8 -left-24 rotate-180"><img className="w-32" src={cookingEggWithoutBG} alt="egg on a pan image" /></div>
        </div>
    );
};

export default Packaging;