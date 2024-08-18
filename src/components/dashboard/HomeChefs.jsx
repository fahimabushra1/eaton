import { FaRegClock } from "react-icons/fa";
import offer from "../../assets/images/offer-banner3.jpg"
import { MdDirectionsBike } from "react-icons/md";

const HomeChefs = () => {
    return (
        <div>
               <div className="grid grid-cols-3 gap-2 pb-4 my-4">
                 <div>
                 <div className="rounded-3xl overflow-hidden">
                        <div className="flex justify-between items-center px-4 py-2 bg-white">
                          <div className="flex justify-center items-center gap-2">
                                   <div><FaRegClock className="text" /></div>
                                  <div><p>35-55 min</p></div>
                             </div>
                            <div className="flex justify-center items-center gap-2">
                                  <div><MdDirectionsBike /></div>
                                  <div><p className="font-semibold text-[#EA2027]">free</p></div>
                             </div>
                        </div>
                        <div>
                              <img className="w-72" src={offer} alt="" />
                         </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center">
                            <div><strong>restaurant name</strong></div>
                            <div></div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                 </div>
            <div className="rounded-3xl overflow-hidden">
                <div className="flex justify-between items-center px-4 py-2 bg-white">
                    <div className="flex justify-center items-center gap-2">
                  <div><FaRegClock className="text" /></div>
                  <div><p>35-55 min</p></div>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <div><MdDirectionsBike /></div>
                      <div><p className="font-semibold text-[#EA2027]">free</p></div>
                    </div>
                </div>
                <div>
                    <img className="w-72" src={offer} alt="" />
                </div>
            </div>
            <div className="rounded-3xl overflow-hidden">
                <div className="flex justify-between items-center px-4 py-2 bg-white">
                    <div className="flex justify-center items-center gap-2">
                  <div><FaRegClock className="text" /></div>
                  <div><p>35-55 min</p></div>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <div><MdDirectionsBike /></div>
                      <div><p className="font-semibold text-[#EA2027]">free</p></div>
                    </div>
                </div>
                <div>
                    <img className="w-72" src={offer} alt="" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default HomeChefs;