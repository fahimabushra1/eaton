import burger from "../assets/images/burgerWithoutBG1.png"

const Dashboard = () => {
    return (
        <div>
      <div className="bg-[#57f0a8] overflow-hidden mt-4 rounded-3xl">
      <div className='flex justify-center items-center gap-8'>
        <div><img className="w-52" src={burger} alt="burger image" /></div>
        <div>
            <strong className="capitalize text-2xl text-orange-500">get burger for free!</strong>
            <p className="font-semibold">Make your first order for 150 and get burger from our shops for free!</p>   
        </div>
      </div>
      <div>
      <p className="float-right pr-8 pb-2">Learn more</p>
        </div>
      </div>
      <div className='w-1/2 mt-12'>
      <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search for restaurants, cuisines and dishes" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
      </div>
        </div>
    );
};

export default Dashboard;