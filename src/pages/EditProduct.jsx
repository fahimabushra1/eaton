import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import veggies from "../assets/images/veggiesWithoutBG.png"
import burger from "../assets/images/burgerWithoutBG1.png"
import toast from "react-hot-toast";


const EditProduct = () => {
    // const token = localStorage.getItem('token')
    const food = useLoaderData();
    console.log(food)

    const [restaurantName, setRestaurantName] = useState(food?.restaurant_name);
    const [productName, setProductName] = useState(food?.food[0].food_name);
    const [category, setCategory] = useState(food?.cuisine_type);
    const [deliveryCost, setDeliveryCost] = useState(food?.delivery_cost);
    const [deliveryTime, setDeliveryTime] = useState(food?.delivery_time);
    const [address, setAddress] = useState(food?.address);
    const [distance, setDistance] = useState(food?.distance);
    const [description, setDescription] = useState(food?.food_description);
    const [presentPrice, setPresentPrice] = useState(food?.previous_price);
    const [popularity, setPopularity] = useState(food?.popularity);
    const [previousPrice, setPreviousPrice] = useState(food?.previous_cost);
    const [image, setImage] = useState(food?.image);


      const handleSubmit= async (e)=>{
        e.preventDefault();
    
        const form = e.target;
     const food_name = form.productName.value;
     const restaurant_name = form.restaurantName.value;
     const address = form.address.value;
     const delivery_cost = form.deliveryCost.value;
     const delivery_time = form.deliveryTime.value;
     const previous_cost = form.previousPrice.value;
     const previous_price = form.presentPrice.value;
     const cuisine_type = form.category.value;
     const popularity = form.popularity.value;
     const food_description = form.description.value;
     const distance = form.distance.value;
     const image = form.img.value;
     console.log(food_name,food_description,address,previous_cost,previous_price,cuisine_type,image,popularity,restaurant_name,delivery_cost,delivery_time,distance);
  
     const data ={food_name,food_description,address,previous_cost,previous_price,cuisine_type,image,popularity,restaurant_name,delivery_cost,delivery_time,distance};
     
     await fetch(`http://localhost:5000/dashboard/food/${food?._id}`,{
        method: "PATCH",
        headers: {
            "Content-type": "application/json",
            // authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data),})
        .then((res) =>res.json())
        .then((data) =>{
          toast.success('data updated successfully', {
            style: {
              border: '1px solid #0BE58A',
              padding: '16px',
              color: '#ffffff',
              borderRadius: '10px',
              background: '#ED4C67',
            },
          });
          console.log(data)
          form.reset()})
        .catch((err) => {
          toast.error('data  updated fail ')
          console.log(err.message);
       });
      }
  return (
        <div>
            <h1 className="text-5xl text-center my-8 font-bold capitalize text-[#EA2027]">edit product</h1>
            <img className="w-14 absolute top-12 right-96 -z-10 rotate-45" src={veggies} alt="veggies" />
          <form onSubmit={handleSubmit} className="card-body w-full">
          <div className="flex justify-center gap-4 bg-[#c0c7ee] shadow-2xl p-12">
          <img className="w-40 absolute top-20 right-16 z-10" src={burger} alt="burger" />
         <div className="w-1/2">
         <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Restaurant Name</span>
              </label>
              <input type="text" name="restaurantName" placeholder="restaurant name" value={restaurantName} onChange={(e)=>setRestaurantName(e.target.value)} className="input input-bordered" required />
            </div>
         <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Food Name</span>
              </label>
              <input type="text" name="productName" placeholder="product name" value={productName} onChange={(e)=>setProductName(e.target.value)}  className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Description</span>
              </label>
              <input type="text" name="description" placeholder="description" value={description} onChange={(e)=>setDescription(e.target.value)}  className="input input-bordered" required />
              </div>
         <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Previous Price</span>
              </label>
              <input type="number" name="previousPrice" placeholder="previous price" value={previousPrice} onChange={(e)=>setPreviousPrice(e.target.value)}  className="input input-bordered" required />
            </div>
         <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Delivery Cost</span>
              </label>
              <input type="text" name="deliveryCost" placeholder="delivery cost" value={deliveryCost} onChange={(e)=>setDeliveryCost(e.target.value)}  className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Distance</span>
              </label>
              <input type="text" name="distance" placeholder="distance" value={distance} onChange={(e)=>setDistance(e.target.value)}  className="input input-bordered" required />
              </div>
         </div>
           <div className="w-1/2">
           <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Address</span>
              </label>
              <input type="text" name="address" placeholder="address" value={address} onChange={(e)=>setAddress(e.target.value)}  className="input input-bordered" required />
            </div>
           <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Cuisine type</span>
              </label>
              <input type="text" name="category" placeholder="cuisine type" value={category} onChange={(e)=>setCategory(e.target.value)}  className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Image</span>
              </label>
              <input type="text" name="img" placeholder="image URL" value={image} onChange={(e)=>setImage(e.target.value)} className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Present Price</span>
              </label>
              <input type="number" name="presentPrice" placeholder="present price" value={presentPrice} onChange={(e)=>setPresentPrice(e.target.value)}  className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Delivery Time</span>
              </label>
              <input type="text" name="deliveryTime" placeholder="delivery time" value={deliveryTime} onChange={(e)=>setDeliveryTime(e.target.value)}  className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Popularity</span>
              </label>
              <input type="text" name="popularity" placeholder="popularity" value={popularity} onChange={(e)=>setPopularity(e.target.value)}  className="input input-bordered" required />
            </div>
           </div>
          </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#12CBC4] hover:bg-[#ED4C67] font-bold">Update</button>
              </div>
          </form>
    </div>
    )
};
export default EditProduct;