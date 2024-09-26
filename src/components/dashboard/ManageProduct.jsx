import { FaRegClock, FaWalking } from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const ManageProduct = ({food, onDelete}) => {
    const {_id, restaurant_name, popularity, delivery_time,  distance, delivery_cost, cuisine_type, image} = food;

    const handleDelete = async () =>{
      await fetch(`http://localhost:5000/dashboard/food/${_id}`,{
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
              //  authorization: `Bearer ${token}`
        },
        })
          .then((res) =>res.json())
          .then((data) =>{
              console.log(data)
              onDelete(_id)
              toast.success('product deleted', {
                style: {
                  border: '1px solid #0BE58A',
                  padding: '16px',
                  color: '#ffffff',
                  borderRadius: '10px',
                  background: '#ED4C67',
                },
              })
          })
        }
    return (
        <div>
            <div className="card bg-base-100 w-72 max-h-[350px] shadow-xl">
  <figure>
    <img className="max-h-32 rounded-3xl mt-6"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    {restaurant_name}
          <Rating popularity={popularity}/>
    </h2>
    <p>{cuisine_type}</p>
    <div>
        <small><GiDeliveryDrone className="inline-flex mr-2"/>{delivery_cost}</small>
        <small className="px-2">< FaRegClock className="inline-flex mr-2"/>{delivery_time}</small>
        <small>< FaWalking className="inline-flex mr-2"/>{distance}</small>
    </div>
    <div className="card-actions justify-end mt-2">
    <button className="mr-2 bg-[#12CBC4] px-4 rounded"><Link to={`/dashboard/manage-products/${_id}`}>Edit</Link></button>
      <button onClick={handleDelete} className="bg-[#ED4C67]  px-2 rounded">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ManageProduct;