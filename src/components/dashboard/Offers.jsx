import PropTypes from 'prop-types';
import { RiDiscountPercentFill } from 'react-icons/ri';

const Offers = ({offerr}) => {
    console.log(offerr);
    const {offer, description} = offerr;
    return (
        <div>
           <div className="card bg-[#c0c7ee] w-72 min-h-36 max-h-36 shadow-xl ml-1">
  <div className="card-body">
    <h2 className="card-title"><RiDiscountPercentFill className='bg-white text-[#EA2027] rounded-full'/>{offer}</h2>
    <p className='text-sm'>{description}</p>
  </div>
</div> 
        </div>
    );
};

Offers.propTypes = {
   offerr: PropTypes.object.isRequired, 
};

export default Offers;