import offerBanner2 from '../../assets/images/offer-banner2.jpg';
import offerBanner3 from '../../assets/images/offer-banner3.jpg';

const Offers = () => {
    return (
        <div className='flex gap-4 mt-24 mx-8'>
           <div className='flex justify-center items-center grow'>
                <div className='hover:scale-75 hover:translate-x-4 hover:skew-y-3'><img src={offerBanner2} alt="offer image" /></div>
                <div className='ml-2'>
                      <div className='hover:scale-75 hover:translate-x-4 hover:skew-y-3'><img src={offerBanner3} alt="offer image" /></div>
                      <div className='mt-2 hover:scale-75 hover:translate-x-4 hover:skew-y-3'><img src={offerBanner3} alt="offer image" /></div>
                </div>
           </div>
        </div>
    );
};

export default Offers;