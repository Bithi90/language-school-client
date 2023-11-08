/* eslint-disable react/no-unknown-property */
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt } from 'react-icons/fa';

const ManageAllClass = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: courses = [], refetch } = useQuery(['course'], async () => {
        const result = await axiosSecure.get('/course')
        return result.data;
    })



    const handDenied = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(` https://language-server-brown.vercel.app/course/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <div className="w-full ml-20">
            <h2>manage class : {courses.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-teal-600 text-white">
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instractor Name</th>
                            <th>Price</th>
                            <th>Available_seats</th>
                            <th></th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            courses.map((course, index) => <tr
                                key={course._id}
                                pendingClass={course}
                                index={index}
                            >
                                <td>{index}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-[100px] h-[80px]">
                                                <img src={course.image} alt="toy" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h2 className="font-bold">{course.courseName}</h2></td>
                                <td>
                                    <div className="text-sm font-bold">{course.instractorName}</div>
                                </td>
                                <td className="font-bold"> $ {course.price}</td>
                                <td>{course.available_seats}</td>
                                <td className="font-bold">
                                    {
                                        course.status === 'approved' ? 'Approved' :
                                            <p>{course.status}</p>
                                    }
                                </td>


                                <th>
                                    <button onClick={() => handDenied(course._id)} className="btn text-2xl btn-sm text-red-600"><FaTrashAlt></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllClass;