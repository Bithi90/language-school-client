import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";
import { Helmet } from "react-helmet-async";


const Instructor = () => {

    const [instructor, setInstructor] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructor')
            .then(res => res.json())
            .then(data => setInstructor(data));
    }, [])

    return (
        <>
            <Helmet>
                <title>L.S. | Instructor</title>
            </Helmet>
            <div>
                <h2 className="text-center font-bold text-teal-500 text-4xl">Our Respectable Instructors</h2>
                <div className='grid grid-cols-4 gap-2 p-10'>
                    {
                        instructor.map(item => <InstructorCard
                            key={item.name}
                            item={item}
                        ></InstructorCard>)
                    }
                </div>
            </div>
        </>

    );
};

export default Instructor;