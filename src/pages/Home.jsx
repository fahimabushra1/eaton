import { useLoaderData } from "react-router-dom";
import Banner from '../components/home/Banner';
import AppDownload from '../components/home/AppDownload';
import Categories from '../components/home/Categories';
import Delivery from '../components/home/Delivery';
import Packaging from '../components/home/Packaging';
import Offers from '../components/home/Offers';
import Restaurants from "../components/home/Restaurants";

const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
           <Banner/>
           <AppDownload/>
           <Categories/>
           <Restaurants data= {data}/>
           <Delivery/>
           <Packaging/>
           <Offers/>
        </div>
    );
};

export default Home;