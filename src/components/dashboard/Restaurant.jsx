import { FaRegClock, FaWalking } from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import PropTypes from "prop-types";

const Restaurant = ({food}) => {
    const {_id, restaurant_name, popularity, delivery_time,  distance, delivery_cost, cuisine_type, image} = food;
    return (
        <div>
            <div className="card bg-base-100 w-72 max-h-[350px] shadow-xl">
  <figure>
    <img className="max-h-32 rounded-full mt-6"
      src={image}
      alt="restaurant" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    {restaurant_name}
          <Rating popularity={popularity}/>
    </h2>
    <p>{cuisine_type} </p>
    <div>
        <small><GiDeliveryDrone className="inline-flex mr-2"/>{delivery_cost}</small>
        <small className="px-2">< FaRegClock className="inline-flex mr-2"/>{delivery_time}</small>
        <small>< FaWalking className="inline-flex mr-2"/>{distance}</small>
    </div>
    <div className="card-actions justify-start pt-2">
      <Link to ={`/food/${_id}`} className="btn bg-[#12CBC4] capitalize">try some food</Link>
    </div>
  </div>
</div>
        </div>
    );
};


Restaurant.propTypes = {
  food: PropTypes.object.isRequired,
};

export default Restaurant;