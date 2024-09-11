import { useLoaderData } from 'react-router-dom';

const FoodDetail = () => {
  const food = useLoaderData();
  console.log(food)
  const {_id, restaurant_name, popularity, delivery_time,  distance, delivery_cost, cuisine_type, image} = food;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"> {restaurant_name}</h2>
    <p>{ cuisine_type}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodDetail;