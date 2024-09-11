import pizza from "../../assets/images/Frame 104.png"
import frenchFry from "../../assets/images/Frame 105.png"
import momos from "../../assets/images/food 1.png"
import burger from "../../assets/images/Frame 106.png"
import pickingFrenchFry from "../../assets/images/picking-frenchFry2.png"

const Categories = () => {
    return (
        <div className="my-12">
           <div className='flex justify-around gap-24'>
                 <div className="text-4xl font-bold capitalize">
                    <h2>our <span className="text-orange-500">best delivered</span><br /> categories</h2>
                </div>
                 <div className="mt-4"><p>it;s not just about bringing you good food from <br /> restaurants, we deliver you experience.</p></div>
           </div>
           <div className="grid grid-cols-4 gap-4 relative mt-24">
                 <div><img src={burger} alt="burger" /></div>
                 <div><img src={pizza} alt="pizza" /></div>
                 <div><img src={momos} alt="momos" /></div>
                 <div><img src={frenchFry} alt="french fry" /></div>
                 <div className="absolute top-0 right-0 w-24 -rotate-45"><img src={pickingFrenchFry} alt="french fry in hand" /></div>
           </div>
        </div>
    );
};

export default Categories;