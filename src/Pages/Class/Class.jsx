import { useEffect, useState } from "react";
import Classes from "./Classes";
import { Helmet } from "react-helmet-async";


const Class = () => {


    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch('language-school-server-tawny.vercel.app/course')
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [])

    return (
        <><Helmet>
            <title>L.S. | Class</title>
        </Helmet>
            <div>
                <div className="bg-teal-600 flex py-10 space-x-reverse">
                    <h2 className=" ps-10 font-semibold text-yellow-300 pe-[500px] text-3xl">Courses</h2>
                    <h2 className=" ps-10 font-semibold text-yellow-300 ps-96  text-lg">Home/Course</h2>
                </div>
                <div className='grid grid-cols-4 gap-2 p-10'>
                    {
                        course.map(item => <Classes
                            key={item._id}
                            item={item}
                        ></Classes>)
                    }
                </div>
            </div>
        </>

    );
};

export default Class;