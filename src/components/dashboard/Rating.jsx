import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io';

const Rating = ({popularity}) => {
    const ratingStar =Array.from({length: 5}, (elem, index) => {
        
        let number = index + 0.5;

        return (
                <span key={index}>
                        {
                            popularity >= index + 1 ? (
                                <IoMdStar className='text-yellow-500 text-xs' />
                            ) : 
                            popularity >= number ? (
                                <IoMdStarHalf className='text-yellow-500 text-xs' />
                            ) : (
                                <IoMdStarOutline className='text-yellow-500 text-xs' />
                            )
                        }
                </span>
                );
        }) 
        console.log(ratingStar)  
    return (
        <div className='inline-flex'>
            {ratingStar}
        </div>
    );
};

export default Rating;