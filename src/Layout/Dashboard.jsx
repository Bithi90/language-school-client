import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { VscDebugContinue } from 'react-icons/vsc';
import { FaUsers } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa';
import { BiSelectMultiple } from 'react-icons/bi';
import { GiWallet } from 'react-icons/gi';
// import useAdmin from "../Hooks/useAdmin";
// import useMakeInstractor from "../Hooks/useMakeInstractor";
import { Helmet } from "react-helmet-async";



const Dashboard = () => {

    const isAdmin = true;
    const isInstractor = true;

    // const [isAdmin] = useAdmin();
    // const [isInstractor] = useMakeInstractor();

    return (
        <>
            <Helmet>
                <title>L.S. | Dashboard</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-teal-600  text-white font-semibold">
                        {/* Sidebar content here */}
                        { }


                        {
                            isAdmin ? <>
                                <li>
                                    <div className='grid justify-items-center border-b-4 border-yellow-300'>
                                        <p className='text-yellow-300 text-xl font-bold mb-2'>Language School</p>
                                    </div>
                                </li>

                                <li><NavLink to='/'><FaHome></FaHome> Admin Home</NavLink></li>
                                <li>
                                    <NavLink to='/dashboard/manageUser'><FaUsers></FaUsers> Manage User</NavLink></li>
                                <li><NavLink to='/dashboard/manageClass'><VscDebugContinue></VscDebugContinue> Manage Classes </NavLink></li>
                                <li className="border-t-4 border-yellow-300 mt-10"><NavLink to='/'><FaHome></FaHome> Home </NavLink></li>
                                <li><NavLink to='/dashboard/manageAllClass'><FaCircle></FaCircle> Manage All Classes </NavLink></li>
                            </> :
                                isInstractor ? <>
                                    <li>
                                        <div className='grid justify-items-center border-b-4 border-yellow-300'>
                                            <p className='text-yellow-300 text-xl font-bold mb-2'>Language School</p>
                                        </div>
                                    </li>

                                    <li><NavLink to='/'><FaHome></FaHome> Instractor Home</NavLink></li>
                                    <li>
                                        <NavLink to='/dashboard/instractorClass'><BiSelectMultiple></BiSelectMultiple> My Classes</NavLink></li>
                                    <li><NavLink to='/dashboard/addClass'><VscDebugContinue></VscDebugContinue> Add a Class </NavLink></li>
                                    <li className="border-t-4 border-yellow-300 mt-10"><NavLink to='/'><FaHome></FaHome> Home </NavLink></li>
                                    <li><NavLink to='/classes'><FaCircle></FaCircle> All Classes </NavLink></li>

                                </> :


                                    <>
                                        <li>
                                            <div className='grid justify-items-center border-b-4 border-yellow-300'>
                                                <p className='text-yellow-300 text-xl font-bold mb-2'>Language School</p>
                                            </div>
                                        </li>

                                        <li><NavLink to='/'><FaHome></FaHome> User Home</NavLink></li>
                                        <li>
                                            <NavLink to='/dashboard/selectedClasses'><BiSelectMultiple></BiSelectMultiple> My Selected Classes <div className="badge text-white bg-yellow-300"></div></NavLink></li>
                                        <li><NavLink to='/dashboard/selectedClasse'><VscDebugContinue></VscDebugContinue> My Enrolled Classes </NavLink></li>
                                        <li><NavLink to='/dashboard/payment'><GiWallet></GiWallet> My Payment History </NavLink></li>
                                        <li className="border-t-4 border-yellow-300 mt-10"><NavLink to='/'><FaHome></FaHome> Home </NavLink></li>
                                        <li><NavLink to='/classes'><FaCircle></FaCircle> All Classes </NavLink></li>


                                    </>
                        }
                    </ul>

                </div>
            </div>

        </>

    );
};

export default Dashboard;