import PropTypes from 'prop-types';

const FoodItems = ({foodItem}) => {
    console.log(foodItem)
   const {food_name, food_description, category, previous_price, present_price, isPopular, image} = foodItem
    return (
        <div>
            <div className="card bg-base-100 max-w-72 max-h-80 shadow-xl mx-4">
  <figure>
    <img className='h-32 w-full p-2 rounded-3xl'
      src={image}
      alt="food image" />
  </figure>
  <div className="card-body h-64 space-y-1">
   <div className='flex'>
   <h2 className="card-title">{food_name}</h2>
   <span className="badge badge-secondary">{isPopular}</span>
   </div>
    <p>{food_description}</p>
   <div className='flex'>
   <p>from tk <span className='line-through'>{previous_price}</span></p>
   <p>tk {present_price} </p>
   </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
  </div>
)
};

FoodItems.propTypes = {
   foodItem: PropTypes.object.isRequired, 
};

export default FoodItems;