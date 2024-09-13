import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import pizzaHut from "../assets/images/Pizza-hut.png"
import { LuDot } from 'react-icons/lu';

const FoodDetail = () => {
  const food = useLoaderData();
  console.log(food)
  const {_id, restaurant_name, popularity, delivery_time, food_description, present_price, previous_price, address, food_name, distance, delivery_cost, cuisine_type, image} = food;
    return (
        <div>
          <div className="card w-full shadow-xl mx-4 mt-2 bg-[#c0c7ee]">
  <div className="card-body">
  <div className='flex justify-center items-center'>
  <div>
   <img src={pizzaHut} alt="pizza hut logo" />
   </div>
   <div className='ml-4'>
   <h2 className="card-title text-3xl">{restaurant_name}</h2>
    <p>{cuisine_type}</p>
   <p className='mb-4'>rating</p>
    <div className='grid grid-cols-3 gap-2'>
     <div className='flex'>
     <p>{address}</p>
     <span><LuDot className='text-xs mt-2' /></span>
     </div>
      <p>{distance} away</p>
      <Link>open in map</Link>
    </div>
   </div>
  </div>
  </div>
</div>
<div className='flex'>
  <div className='w-3/4 bg-red-200'>
  <h2 className="text-3xl font-bold my-4 ml-4">Food you like</h2>
            <div className="card bg-base-100 w-72 shadow-xl ml-4">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{food_name}</h2>
    <p>from tk <span className='line-through'>{present_price}</span></p>
    <p>tk {previous_price}</p>
    <p>{food_description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
  </div>
  <div className='bg-green-200 w-1/4'>

  </div>
</div>
        </div>
    );
};

export default FoodDetail;