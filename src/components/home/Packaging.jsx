import packed1 from "../../assets/images/Packed 1.png"
import packed2 from "../../assets/images/Packed 2.png"
import packed3 from "../../assets/images/Packed 3.png"
import cookingEggWithoutBG from "../../assets/images/cookingEggWithoutBG.png"

const Packaging = () => {
    return (
        <div className="relative mt-12">
           <h1 className="text-center">how we <span>serve</span> you</h1>
           <div className="grid grid-cols-3 gap-4">
                 <div>
                    <img src={packed1} alt="packed1" />
                    <p>100% environment friendly packaging</p>
                 </div>
                 <div>
                    <img src={packed2} alt="packed2" />
                    <p>we deliver the best experiences</p>
                 </div>
                 <div>
                    <img src={packed3} alt="packed3" />
                    <p>promise to deliver within 30 minutes</p>
                 </div>
           </div>
           <div className="absolute -top-12 -left-12 rotate-180"><img className="w-32" src={cookingEggWithoutBG} alt="egg on a pan image" /></div>
        </div>
    );
};

export default Packaging;