import Restaurant from "./Restaurant";

const Restaurants = ({data}) => {
    console.log(data)
    return (
        <div className="p-4">
              <h1 className="text-3xl font-bold mb-4">All restaurants</h1>
        
        <div className="grid grid-cols-3 gap-4">
         {
           // eslint-disable-next-line react/prop-types
           data?.map((food)=>
             <Restaurant key={food._id} food={food} />)
         }
        </div>
        </div>
    );
};

export default Restaurants;