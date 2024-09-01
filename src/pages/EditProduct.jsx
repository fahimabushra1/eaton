import React from 'react';

const EditProduct = () => {
    // const token = localStorage.getItem('token')
    // const coffee = useLoaderData();
    // console.log(coffee)

    // const [coffeeName, setCoffeeName] = useState(coffee?.restaurant_name);
    // const [coffeeBrand, setCoffeeBrand] = useState(coffee?.food_name);
    // const [coffeeCategory, setCoffeeCategory] = useState(coffee?.cuisine_type);
    // const [coffeePrice, setCoffeePrice] = useState(coffee?.delivery_cost);
    // const [coffeeSize, setCoffeeSize] = useState(coffee?.delivery_time);
    // const [coffeeSize, setCoffeeSize] = useState(coffee?.address);
    // const [coffeeSize, setCoffeeSize] = useState(coffee?.distance);
    // const [coffeeSize, setCoffeeSize] = useState(coffee?.food_description);
    // const [coffeeSize, setCoffeeSize] = useState(coffee?.present_price);
    // const [coffeeSize, setCoffeeSize] = useState(coffee?.popularity);
    // const [coffeeSize, setCoffeeSize] = useState(coffee?.previous_price);
    // const [coffeeImg, setCoffeeImg] = useState(coffee?.image);


      const handleSubmit= async (e)=>{
        e.preventDefault();
    
        const form = e.target;
     const name = form.productName.value;
     const restaurant = form.restaurantName.value;
     const address = form.address.value;
     const deliveryCost = form.deliveryCost.value;
     const deliveryTime = form.deliveryTime.value;
     const previousPrice = form.previousPrice.value;
     const presentPrice = form.presentPrice.value;
     const category = form.category.value;
     const popularity = form.popularity.value;
     const description = form.description.value;
     const distance = form.distance.value;
     const img = form.img.value;
     console.log(name,description,address,previousPrice,presentPrice,category,img,popularity,restaurant,deliveryCost,deliveryTime,distance);

     
    //  await fetch(`http://localhost:5000/coffees/${coffee._id}`,{
    //     method: "PATCH",
    //     headers: {
    //         "Content-type": "application/json",
    //         authorization: `Bearer ${token}`
    //     },
    //     body: JSON.stringify(data),})
    //     .then((res) =>res.json())
    //     .then((data) =>{
    //       toast.success('data updated successfully');
    //       console.log(data)
    //       form.reset()})
    //     .catch((err) => {
    //       toast.error('data  updated fail ')
    //       console.log(err.message);
    //    });
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
              <input type="text" name="restaurantName" placeholder="restaurant name" value={coffeeBrand} onChange={(e)=>setCoffeeBrand(e.target.value)} className="input input-bordered" required />
            </div>
         <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <input type="text" name="productName" placeholder="product name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input type="text" name="description" placeholder="description" className="input input-bordered" required />
              </div>
         <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Previous Price</span>
              </label>
              <input type="number" name="previousPrice" placeholder="previous price" className="input input-bordered" required />
            </div>
         <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Delivery Cost</span>
              </label>
              <input type="text" name="deliveryCost" placeholder="delivery cost" className="input input-bordered" required />
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
              <input type="text" name="category" placeholder="cuisine type+" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input type="file" name="img" placeholder="image URL" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Present Price</span>
              </label>
              <input type="number" name="presentPrice" placeholder="present price" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Delivery Time</span>
              </label>
              <input type="text" name="deliveryTime" placeholder="delivery time" className="input input-bordered" required />
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
    )
};
export default EditProduct;`