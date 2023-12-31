/* eslint-disable react/no-unknown-property */
import { useQuery } from "react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrashAlt } from 'react-icons/fa';


const ManageUser = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['user'], async () => {
        const result = await axiosSecure.get('/user')
        return result.data;
    })


    const handleMakeAdmin = id => {
        console.log(id);
        fetch(` https://language-server-brown.vercel.app/user/admin/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'admin created successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })

    }
    const handleMakeInstractor = id => {
        console.log('instractor btn clicked')
        console.log(id);
        fetch(` https://language-server-brown.vercel.app/user/instructor/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'instractor created successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })

    }

    const handleDelete = id => {
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
                fetch(` https://language-server-brown.vercel.app/user/${id}`, {
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
            <h2 className="flex justify-evenly font-semibold text-2xl mb-10">All user : {users.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-teal-600 text-white">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll</th>
                            <th>Action</th>
                            <th>Make Admin</th>
                            <th>Make Instractor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                                user={user}
                            >
                                <td>{index + 1}</td>

                                <td>
                                    <h2 className="font-bold">{user.name}</h2></td>
                                <td>
                                    <div className="text-sm font-bold"> {user.email}</div>
                                </td>
                                <td className="font-bold">
                                    {
                                        user.role === 'admin' ? 'Admin' :
                                            user.role === 'instractor' ? 'Instractor' :
                                                <p>{user.role}</p>
                                    }</td>
                                <th>
                                    {
                                        user.role === 'admin' || user.role === 'instractor' ? <>
                                            <button disabled={true} className="btn  btn-sm">Make Admin</button>
                                        </> :
                                            <button onClick={() => handleMakeAdmin(user._id)} className="btn bg-teal-600 btn-sm font-bold text-yellow-300">Make Admin</button>
                                    }


                                </th>

                                <th>
                                    {
                                        user.role === 'instractor' || user.role === 'admin' ? <>
                                            <button disabled={true} className="btn  btn-sm">Make Instractor</button>
                                        </> :
                                            <button onClick={() => handleMakeInstractor(user._id)} className="btn bg-teal-600 btn-sm font-bold text-yellow-300">Make Instractor</button>
                                    }

                                </th>
                                <th>
                                    <button onClick={() => handleDelete(user._id)} className="btn text-2xl btn-sm text-red-600"><FaTrashAlt></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;