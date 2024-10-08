import burger from "../assets/images/burgerWithoutBG1.png"
import FavouriteCuisines from "../components/dashboard/FavouriteCuisines";
import SearchInput from "../components/dashboard/SearchInput";
import Restaurants from "../components/dashboard/Restaurants";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const [search,setSearch] = useState();
  const data = useLoaderData();
  console.log(data)
  const handleSearch = (e)=>{
    setSearch(e.target.value)
  }
    return (
        <div className="pl-2 pt-4  bg-[#c0c7ee]">
          <SearchInput data={data} handleSearch={handleSearch}/>
      <div className="bg-white overflow-hidden mt-4 rounded-3xl mr-4">
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
      <Restaurants data= {data} search={search}/>
        </div>
    );
};

export default Dashboard;