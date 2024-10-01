import PropTypes from 'prop-types';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

const OrdersReview = ({cart}) => {
    console.log(cart);
    const {image, food_name, present_price} = cart;
    return (
        <div className='grid grid-cols-4 gap-2 items-center'>
            <div>
                <img className='w-14 rounded-full ml-2' src={image} alt="food item" />
            </div>
            <div className='w-32'>
                <h2 className='mt-4'>{food_name}</h2>
                <p>{present_price} TK</p>
            </div>
            <div className='flex justify-center items-center gap-2 ml-16'>
           <button><FiMinus /></button>
           <p>2</p>
           <button><FiPlus /></button>
            </div>
            <div className='ml-8'>
            <RiDeleteBin6Line />
            </div>
        </div>
    );
};

OrdersReview.propTypes = {
    cart: PropTypes.object.isRequired,
};

export default OrdersReview;