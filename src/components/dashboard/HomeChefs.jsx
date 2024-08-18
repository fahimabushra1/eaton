import offer from "../../assets/images/offer-banner3.jpg"

const HomeChefs = () => {
    return (
        <div className="grid grid-cols-4 gap-2 pb-4 my-4">
            <div className="rounded-3xl overflow-hidden">
                <div className="flex justify-between items-center px-4 bg-orange-500">
                    <div>
                     <p>2km away</p>
                    </div>
                    <div>
                        <p>45min</p>
                    </div>
                </div>
                <div>
                    <img className="w-44" src={offer} alt="" />
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center">
                    <div>
                     <p>2km away</p>
                    </div>
                    <div>
                        <p>45min</p>
                    </div>
                </div>
                <div>
                    <img className="w-32" src={offer} alt="" />
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center">
                    <div>
                     <p>2km away</p>
                    </div>
                    <div>
                        <p>45min</p>
                    </div>
                </div>
                <div>
                    <img className="w-32" src={offer} alt="" />
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center">
                    <div>
                     <p>2km away</p>
                    </div>
                    <div>
                        <p>45min</p>
                    </div>
                </div>
                <div>
                    <img className="w-32" src={offer} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomeChefs;