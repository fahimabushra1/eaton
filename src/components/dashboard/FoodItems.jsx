import PropTypes from 'prop-types';
import { FaFire } from 'react-icons/fa';
import { LuDot } from 'react-icons/lu';

const FoodItems = ({foodItem, handleAddToCart}) => {
    console.log(foodItem)
   const {food_name, food_description, category, previous_price, present_price, isPopular, image} = foodItem
    return (
        <div>
            <div className="card bg-[#c0c7ee] shadow-3xl max-h-72 min-h-72 max-w-72 mx-2 mb-4 relative">
            <span className="badge badge-outline font-bold absolute top-2 left-2"><FaFire className='text-red-600' />{isPopular}</span>
 <div className='flex mt-12 gap-2 ml-2'>
 <figure>
    <img className='rounded-3xl w-24'
      src={image}
      alt="food image" />
  </figure>
  <div>
  <h2 className="card-title">{food_name}</h2>
  <small>
  {
    category?.map((type, idx) =><span key={idx}>{type}<LuDot className='text-sm inline-flex'/></span>)
   }
  </small>
  <div className='flex text-lg justify-left gap-4'>
   <p>from tk <span className='line-through'>{previous_price}</span></p>
   <p>tk {present_price} </p>
   </div>
  </div>
 </div>
 <p className='text-left mt-2 ml-2'>{food_description}</p>
 <div className="card-actions justify-start my-4">
 <button onClick={()=>handleAddToCart(foodItem)} className="bg-[#12CBC4] p-4 rounded-xl ml-2 capitalize">add to cart</button>
 </div>
</div>
  </div>
)
};

FoodItems.propTypes = {
   foodItem: PropTypes.object.isRequired,
   handleAddToCart: PropTypes.func, 
};

export default FoodItems;