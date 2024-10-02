import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { LuDot } from 'react-icons/lu';
import Rating from './Rating';
import { FaHeart, FaRegClock, FaWalking } from 'react-icons/fa';
import { GiDeliveryDrone } from 'react-icons/gi';
import Offers from './Offers';
import FoodItems from './FoodItems';
import OrdersReview from './OrdersReview';
import { useState } from 'react';
import toast from 'react-hot-toast';

const FoodList = () => {
    const foods = useLoaderData();
  console.log(foods)
  const {restaurant_name, popularity, delivery_time, offers,  address, distance, delivery_cost, cuisine_type, image, food} = foods;

const [carts, setCarts] = useState([]);

const handleAddToCart = (cart) =>{
  console.log(cart)
//   const isAlreadyAdded = carts?.find(item => item.id !== cart.id);
//  console.log(isAlreadyAdded)

  // if(!isAlreadyAdded){

    setCarts([...carts, cart]);

  //     }
      // else{
      //   toast('This recipe is already enlisted', {
      //     style: {
      //       border: '1px solid #0BE58A',
      //       padding: '16px',
      //       color: '#0BE58A',
      //       borderRadius: '10px',
      //       background: '#0f172a ',
      //     },
      //   });
      // }
    }

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
    
    <div className='grid grid-cols-1 gap-2'>
     <div className='flex justify-center'>
     <p>{address}</p>
     <span><LuDot className='text-sm mt-1'/></span>
     <p>{distance} away</p>
     </div>
     <Link className='underline text-orange-700' to={"/food/google-map"}>open in map</Link>
    </div>
  
   
    <div className='flex justify-between items-center gap-10'>
    <div>
        <small><GiDeliveryDrone className="inline-flex mr-2"/>{delivery_cost}</small>
        <small className="px-2">< FaRegClock className="inline-flex mr-2"/>{delivery_time}</small>
        <small>< FaWalking className="inline-flex mr-2"/>{distance}</small>
    </div>
    <div><button className='capitalize outline outline-[#12CBC4] p-2'><FaHeart className='text-[#12CBC4] inline-flex mr-2 text-xl' />add to favorites</button></div>
    </div>
   </div>
  {/* </div> */}
</div>
</div>

{/* different offers */}

<div className='grid grid-cols-3 gap-2 ml-4'>
{
  offers?.map((offer, idx) => <Offers key={idx} offerr={offer} />)
}
</div>

{/* food items card and numbers of order */}

<div className='flex mt-8'>
  <div className='w-3/4'>
  <h2 className="text-3xl font-bold my-4 pl-4 capitalize bg-gradient-to-r from-[#ED4C67] via-[#ed4cdd] to-[#836ae7]">Food you like</h2>
<div className='grid grid-cols-2 gap-2'>
  {
food?.map((foodItem, idx) =><FoodItems key={idx} foodItem={foodItem}
  handleAddToCart={handleAddToCart} />)
  }
</div>
</div>
<div className='w-2/5'>
<h2 className="text-3xl font-bold my-4 pl-4 capitalize bg-[#836ae7]">your orders</h2>
<div className='max-h-80 overflow-auto bg-slate-200'>
  {
carts?.map((cart, idx) =><OrdersReview key={idx} cart={cart}/>)
  }
</div>
<p className="font-bold capitalize">Total:</p>
<div className='mt-6 mx-auto w-full bg-[#12CBC4] p-4 rounded-xl text-center'>
<Link to={"/food/checkout"} className='capitalize font-bold'>checkout orders</Link>
</div>
</div>
</div>
        </div>
    );
};

FoodList.propTypes = {
    
};

export default FoodList;