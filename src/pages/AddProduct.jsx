

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
  
       await fetch("http://localhost:5000/food",{
          method: "POST",
          headers: {
              "Content-type": "application/json",
                //  authorization: `Bearer ${token}`
          },
          body: JSON.stringify(data),})
          .then((res) =>res.json())
          .then((data) =>{
            // toast.success('data added successfully');
            console.log(data)
            form.reset()})
          .catch((err) => {
            console.log(err.message);
         });
          
        }
    return (
        <div>
            <h1 className="text-5xl text-center text-[#431407] my-8 font-bold">add Product</h1>
          <form onSubmit={handleSubmit} className="card-body w-full">
          <div className="flex justify-center gap-4 bg-base-100 shadow-2xl p-12">
         <div className="w-1/2">
         <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Restaurant Name</span>
              </label>
              <input type="text" name="restaurant_name" placeholder="restaurant name" className="input input-bordered" required />
            </div>
         <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <input type="text" name="food_name" placeholder="product name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input type="text" name="food_description" placeholder="description" className="input input-bordered" required />
              </div>
         <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Previous Price</span>
              </label>
              <input type="number" name="previous_cost" placeholder="previous price" className="input input-bordered" required />
            </div>
         <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Delivery Cost</span>
              </label>
              <input type="text" name="delivery_cost" placeholder="delivery cost" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Distance</span>
              </label>
              <input type="text" name="distance" placeholder="distance" className="input input-bordered" required />
              </div>
         </div>
           <div className="w-1/2">
           <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input type="text" name="address" placeholder="address" className="input input-bordered" required />
            </div>
           <div className="form-control">
              <label className="label">
                <span className="label-text">Cuisine type</span>
              </label>
              <input type="text" name="cuisine_type" placeholder="cuisine type+" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input type="file" name="image" placeholder="image URL" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Present Price</span>
              </label>
              <input type="number" name="previous_price" placeholder="present price" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Delivery Time</span>
              </label>
              <input type="text" name="delivery_time" placeholder="delivery time" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Popularity</span>
              </label>
              <input type="text" name="popularity" placeholder="popularity" className="input input-bordered" required />
            </div>
           </div>
          </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update</button>
              </div>
          </form>
    </div>
    );
};

export default AddProduct;