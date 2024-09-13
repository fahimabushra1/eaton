import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ManageProduct = () => {
    const food = useLoaderData();
    console.log(food)
    return (
        <div>
            
        </div>
    );
};

export default ManageProduct;