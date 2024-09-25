import toast from "react-hot-toast";
import veggies from "../assets/images/veggiesWithoutBG.png"
import burger from "../assets/images/burgerWithoutBG1.png"

const AddProduct = () => {
    // const token = localStorage.getItem('token')
      const handleSubmit= async (e)=>{
          e.preventDefault();
      
          const form = e.target;
       const food_name = form.food_name.value;
       const restaurant_name = form.restaurant_name.value;
       const address = form.address.value;
       const delivery_cost = form.delivery_cost.value;
       const delivery_time = form.delivery_time.value;
       const previous_cost = form.previous_cost.value;
       const previous_price = form.previous_price.value;
       const cuisine_type = form.cuisine_type.value;
       const popularity = form.popularity.value;
       const food_description = form.food_description.value;
       const distance = form.distance.value;
       const image = form.image.value;
       console.log(food_name,food_description,address,previous_cost,previous_price,cuisine_type,image,popularity,restaurant_name,delivery_cost,delivery_time,distance);
  
       const data ={food_name,food_description,address,previous_cost,previous_price,cuisine_type,image,popularity,restaurant_name,delivery_cost,delivery_time,distance};
  
       await fetch("http://localhost:5000/dashboard/food",{
          method: "POST",
          headers: {
              "Content-type": "application/json",
                //  authorization: `Bearer ${token}`
          },
          body: JSON.stringify(data),})
          .then((res) =>res.json())
          .then((data) =>{
            toast.success('data added successfully', {
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
            console.log(err.message);
         });
          
        }
    return (
        <div>
            <h1 className="text-5xl text-center text-[#EA2027] my-8 font-bold capitalize">add product</h1>
            <img className="w-14 absolute top-12 right-96 -z-10 rotate-45" src={veggies} alt="veggies" />
          <form onSubmit={handleSubmit} className="card-body w-full">
          <div className="flex justify-center gap-4 bg-[#c0c7ee] shadow-2xl p-12">
          <img className="w-40 absolute top-20 right-16 z-10" src={burger} alt="burger" />
         <div className="w-1/2">
         <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Restaurant Name</span>
              </label>
              <input type="text" name="restaurant_name" placeholder="restaurant name" className="input input-bordered" required />
            </div>
         <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Food Name</span>
              </label>
              <input type="text" name="food_name" placeholder="product name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Description</span>
              </label>
              <input type="text" name="food_description" placeholder="description" className="input input-bordered" required />
              </div>
         <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Previous Price</span>
              </label>
              <input type="number" name="previous_cost" placeholder="previous price" className="input input-bordered" required />
            </div>
         <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Delivery Cost</span>
              </label>
              <input type="text" name="delivery_cost" placeholder="delivery cost" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Distance</span>
              </label>
              <input type="text" name="distance" placeholder="distance" className="input input-bordered" required />
              </div>
         </div>
           <div className="w-1/2">
           <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Address</span>
              </label>
              <input type="text" name="address" placeholder="address" className="input input-bordered" required />
            </div>
           <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Cuisine type</span>
              </label>
              <input type="text" name="cuisine_type" placeholder="cuisine type" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Image</span>
              </label>
              <input type="file" name="image" placeholder="image URL" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Present Price</span>
              </label>
              <input type="number" name="previous_price" placeholder="present price" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Delivery Time</span>
              </label>
              <input type="text" name="delivery_time" placeholder="delivery time" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Popularity</span>
              </label>
              <input type="text" name="popularity" placeholder="popularity" className="input input-bordered" required />
            </div>
           </div>
          </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#12CBC4] hover:bg-[#ED4C67] font-bold">Add</button>
              </div>
          </form>
    </div>
    );
};

export default AddProduct;