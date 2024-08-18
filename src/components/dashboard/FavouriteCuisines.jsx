import { BiBowlRice } from "react-icons/bi";
import { BsCake } from "react-icons/bs";
import { GiCookingPot } from "react-icons/gi";
import { PiBreadThin, PiHamburger } from "react-icons/pi";


const FavouriteCuisines = () => {
    return (
        <div className="bg-white p-4 rounded-2xl mt-4">
          <div className="mb-4">
          <h2 className="text-3xl font-bold">Your favourite cuisines</h2>
          <p>Select category you'd like to eat from</p>
          </div>
            <div className="grid grid-cols-5 gap-2">
                <div className="flex justify-center items-center bg-[#12CBC4] hover:bg-[#ED4C67] py-4 gap-2 rounded-xl">
                   <div><PiBreadThin className="text-3xl" /></div>
                   <div className="font-semibold"><button>Breakfast</button></div>
                </div>
                <div className="flex justify-center items-center bg-[#12CBC4] hover:bg-[#ED4C67] py-4 gap-2 rounded-xl">
                   <div><GiCookingPot className="text-3xl" /></div>
                   <div className="font-semibold"><button>Lunch</button></div>
                </div>
                <div className="flex justify-center items-center bg-[#12CBC4] hover:bg-[#ED4C67] py-4 gap-2 rounded-xl">
                   <div><PiHamburger className="text-3xl" /></div>
                   <div className="font-semibold"><button>Fast food</button></div>
                </div>
                <div className="flex justify-center items-center bg-[#12CBC4] hover:bg-[#ED4C67] py-4 gap-2 rounded-xl">
                   <div><BsCake className="text-3x" /></div>
                   <div className="font-semibold"><button>Bakery</button></div>
                </div>
                <div className="flex justify-center items-center bg-[#12CBC4] hover:bg-[#ED4C67] py-4 gap-2 rounded-xl">
                   <div><BiBowlRice className="text-3xl" /></div>
                   <div className="font-semibold"><button>Deshio</button></div>
                </div>
            </div>
        </div>
    );
};

export default FavouriteCuisines;