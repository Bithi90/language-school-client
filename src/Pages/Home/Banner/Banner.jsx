import { Carousel } from 'react-responsive-carousel';
import banner from '../../../assets/young-girl-reading-textbook.jpg';
import banner1 from '../../../assets/jacket-banknote-education-dollar-wealth.jpg';
import banner2 from '../../../assets/charming-student-posing-with-textbook.jpg';
import banner3 from '../../../assets/serious-students-focused-class-assignment.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Carousel className=''>
            <div className='h-[600px] w-full  relative '>
                <div

                    style={{
                        backgroundImage: `url(${banner})`,
                        backgroundSize: "cover"
                    }}
                >
                    <div className=" h-[600px] w-full text-left pt-48 ps-28">
                    <h4 className="text-3xl font-normal text-white "> To have another</h4>
                        <h2 className="text-3xl font-normal text-white ">language is to possess</h2>
                        <h2 className="text-3xl font-normal text-white ">a second soul</h2>
                        <Link to='/signup'><button className="btn btn-sm bg-orange-500 mt-4">Register</button></Link>
                    </div>
                </div>
            </div>
            <div className='h-[600px] w-full'>
                <div

                    style={{
                        backgroundImage: `url(${banner1})`,
                        backgroundSize: "cover"
                    }}
                >
                    <div className=" h-[600px] w-full text-left pt-48 ps-28">
                        <h4 className="text-3xl font-normal text-white "> To have another</h4>
                        <h2 className="text-3xl font-normal text-white ">language is to possess</h2>
                        <h2 className="text-3xl font-normal text-white ">a second soul</h2>
                        <Link to='/signup'><button className="btn btn-sm bg-orange-500 mt-4">Register</button></Link>
                    </div>
                </div>
            </div>
            <div className='h-[600px] w-full'>
                <div

                    style={{
                        backgroundImage: `url(${banner2})`,
                        backgroundSize: "cover"
                    }}
                >
                    <div className=" h-[600px] w-full  text-left  pt-48 ps-28">
                    <h4 className="text-3xl font-normal text-white "> To have another</h4>
                        <h2 className="text-3xl font-normal text-white ">language is to possess</h2>
                        <h2 className="text-3xl font-normal text-white ">a second soul</h2>
                        <Link to='/signup'><button className="btn btn-sm bg-orange-500 mt-4">Register</button></Link>
                    </div>
                </div>
            </div>
            <div className='h-[600px] w-full'>
                <div

                    style={{
                        backgroundImage: `url(${banner3})`,
                        backgroundSize: "cover"
                    }}
                >
                    <div className=" h-[600px] w-full text-left pt-48 ps-28">
                    <h4 className="text-3xl font-normal text-white "> To have another</h4>
                        <h2 className="text-3xl font-normal text-white ">language is to possess</h2>
                        <h2 className="text-3xl font-normal text-white ">a second soul</h2>
                        <Link to='/signup'><button className="btn btn-sm bg-orange-500 mt-4">Register</button></Link>
                    </div>
                </div>
            </div>

        </Carousel>
    );
};

export default Banner;