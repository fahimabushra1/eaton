import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { LuDot } from 'react-icons/lu';
import Rating from './Rating';
import { FaHeart, FaRegClock, FaWalking } from 'react-icons/fa';
import { GiDeliveryDrone } from 'react-icons/gi';
import Offers from './Offers';
import FoodItems from './FoodItems';

const FoodList = () => {
    const foods = useLoaderData();
  console.log(foods)
  const {_id, restaurant_name, popularity, delivery_time, offers,  address, distance, delivery_cost, cuisine_type, image, food} = foods;
    return (
        <div>
          {/* <div className="card w-full shadow-xl mx-4"> */}
  <div className="card-body">
  <div className='flex'>
  <div>
   <img className="max-h-44 max-w-36 rounded-full mt-2" src={image} alt="restaurant logo"/>
   </div>
   <div className='ml-4'>
   <h2 className="card-title text-3xl">{restaurant_name}</h2>
   {
    cuisine_type?.map((type, idx) =><span key={idx}>{type}<LuDot className='text-sm inline-flex'/></span>)
   }
   <Rating popularity={popularity}/>
    <div className='flex justify-between items-center'>
    <div className='grid grid-cols-2 gap-2'>
     <div className='flex'>
     <p>{address}</p>
     <span><LuDot className='text-sm mt-1'/></span>
     <p>{distance} away</p>
     </div>
     <Link className='underline text-orange-700' to={"/food/google-map"}>open in map</Link>
    </div>
    <div><button className='capitalize outline outline-[#12CBC4] p-2'><FaHeart className='text-[#12CBC4] inline-flex mr-2 text-xl' />add to favorites</button></div>
    </div>
    <div>
        <small><GiDeliveryDrone className="inline-flex mr-2"/>{delivery_cost}</small>
        <small className="px-2">< FaRegClock className="inline-flex mr-2"/>{delivery_time}</small>
        <small>< FaWalking className="inline-flex mr-2"/>{distance}</small>
    </div>
   </div>
  {/* </div> */}
</div>
</div>

{/* different offers */}

<div className='grid grid-cols-3 gap-2'>
{
  offers?.map((offer, idx) => <Offers key={idx} offerr={offer} />)
}
</div>

{/* food items card and numbers of order */}

<div className='flex'>
  <div className='w-3/4 bg-red-200'>
  <h2 className="text-3xl font-bold my-4 ml-4">Food you like</h2>
<div className='grid grid-cols-2 gap-2'>
  {
food?.map(foodItem =><FoodItems key={foodItem._id} foodItem={foodItem} />)
  }
</div>
</div>
<div className='bg-orange-500 w-2/5'>

</div>
</div>
        </div>
    );
};

FoodList.propTypes = {
    
};

export default FoodList;