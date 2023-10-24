import { Link } from "react-router-dom";
import errorpage from '../../assets/243627-P43QII-478.jpg';


const ErrorPage = () => {
    return (
        <div>
            <div className='fixed-top'>
                <img className='w-full' src={errorpage} alt="" />
                <Link to='/'><button className="btn bg-white text-orange-600 font-bold absolute top-[610px] left-[700px]">Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;