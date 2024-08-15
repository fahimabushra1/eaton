import offerBanner2 from '../../assets/images/offer-banner2.jpg';
import offerBanner3 from '../../assets/images/offer-banner3.jpg';

const Offers = () => {
    return (
        <div className='flex justify-center items-center'>
           <div className='flex justify-center items-center w-1/2'>
                <div className=''><img src={offerBanner2} alt="offer image" /></div>
                <div className='ml-2'>
                      <div className=''><img src={offerBanner3} alt="offer image" /></div>
                      <div className='mt-2'><img src={offerBanner3} alt="offer image" /></div>
                </div>
           </div>
        </div>
    );
};

export default Offers;