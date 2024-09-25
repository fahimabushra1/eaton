import { useLoaderData } from 'react-router-dom';
import imageFrame from "../assets/images/imageFrame.png"
import { Link } from 'react-router-dom';
import ManageProduct from '../components/dashboard/ManageProduct';
import { useState } from 'react';

const ManageProducts = () => {
    const [deleteProducts, setDeleteProducts] = useState();
    const food = useLoaderData();
    console.log(food)

const handleDeleteProduct =(id)=>{
    setDeleteProducts(deleteProducts.filter(deleteProduct => deleteProduct.id !== id));
}

    return (
        <div>
            <div className='relative'><img src={imageFrame} alt="image frame" />
            <Link className='absolute top-28 left-8 text-2xl capitalize font-bold' to={"/dashboard/add-product"} >add product</Link>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6">
               {
                 food?.map( food => <ManageProduct key={food._id} food={food} onDelete = {handleDeleteProduct} />)
               }
            </div>
        </div>
    );
};

export default ManageProducts;