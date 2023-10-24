import './Featured.css';
import { HiMiniUsers } from 'react-icons/hi2';
import { IoFolderOutline } from 'react-icons/io5';
import { TfiBag } from 'react-icons/tfi';
import { LuBuilding } from 'react-icons/lu';
import { PiGraduationCapDuotone } from 'react-icons/pi';

const Featured = () => {
    return (
        <div className="featured-item bg-cover bg-fixed text-white pt-8  relative">

            <div className=" justify-center  items-center  pb-20 pt-12 px-36">
                <div className='text-center text-xl'>
                    <h2>Language School In Number</h2>
                </div>
                <div className="grid grid-cols-5 gap-0 content-center p-10 ps-36 ">
                    <div className='border border-white grid grid-cols-1 gap-0 content-center p-8 text-center'>
                        <p className='px-10 pb-2'><HiMiniUsers></HiMiniUsers></p>
                        <p>256</p>
                        <p>Student</p>
                    </div>
                    <div className='border border-white grid grid-cols-1 gap-0 content-center p-8  text-center'>
                        <p className='px-10 pb-2'><IoFolderOutline></IoFolderOutline></p>
                        <p>35</p>
                        <p>Learning Programmes</p>
                    </div>
                    <div className='border border-white grid grid-cols-1 gap-0 content-center p-8  text-center'>
                        <p className='px-10 pb-2'><TfiBag></TfiBag></p>
                        <p>12</p>
                        <p>Language Training</p>
                    </div>
                    <div className='border border-white grid grid-cols-1 gap-0 content-center p-8  text-center'>
                        <p className='px-10 pb-2'><LuBuilding></LuBuilding></p>
                        <p>9</p>
                        <p>Brance</p>
                    </div>
                    <div className='border border-white grid grid-cols-1 gap-0 content-center p-8  text-center '>
                        <p className='px-10 pb-2'><PiGraduationCapDuotone></PiGraduationCapDuotone></p>
                        <p>16</p>
                        <p>Teachers</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Featured;