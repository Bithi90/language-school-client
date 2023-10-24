import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BottomOfBanner from "../BottomOfBanner/BottomOfBanner";
import BottomOfCategory from "../BottomOfCategory/BottomOfCategory";
import BottomOfFeatured from "../BottomOfFeatured/BottomOfFeatured";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";



const Home = () => {
    return (
        <>
            <Helmet>
                <title>L.S. | Home</title>
            </Helmet>
            <div>

                <Banner></Banner>
                <BottomOfBanner></BottomOfBanner>
                <Category></Category>
                <BottomOfCategory></BottomOfCategory>
                <Featured></Featured>
                <BottomOfFeatured></BottomOfFeatured>

            </div>
        </>

    );
};

export default Home;