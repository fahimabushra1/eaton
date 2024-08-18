import burger from "../assets/images/burgerWithoutBG1.png"
import caretRight from "../assets/images/Caret right.png"
import FavouriteCuisines from "../components/dashboard/FavouriteCuisines";
import HomeChefs from "../components/dashboard/HomeChefs";
import SearchInput from "../components/dashboard/SearchInput";

const Dashboard = () => {
    return (
        <div className="px-2 pt-4 w-3/4 bg-[#c0c7ee]">
          <SearchInput/>
      <div className="bg-white overflow-hidden mt-4 rounded-3xl">
      <div className='flex justify-center items-center gap-2'>
        <div><img className="w-52" src={burger} alt="burger image" /></div>
        <div>
            <strong className="capitalize text-2xl text-[#EA2027]">get burger for free!</strong>
            <p className="font-semibold">Make your first order for 150 and get burger from our shops for free!</p>   
        </div>
      </div>
      <div>
      <p className="float-right pr-8 pb-2 font-semibold">Learn more</p>
        </div>
      </div>
     <FavouriteCuisines/>
     <HomeChefs/>
        </div>
    );
};

export default Dashboard;