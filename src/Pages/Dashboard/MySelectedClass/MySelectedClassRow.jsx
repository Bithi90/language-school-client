/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const MySelectedClassRow = ({ item, index }) => {

    const [, refetch] = useCart();
    const { courseName, image, price, rating, Length, _id , instractorName } = item;


    const handleDelete = (item) => {
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
                fetch(`http://localhost:5000/cart/${_id}`, {
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
        <tr>
            <td>{index}</td>
            <td>

                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} />
                    </div>
                </div>


            </td>
            <td>{courseName}</td>
            <td>{instractorName}</td>
            <td>{price}</td>
            <td>{rating}</td>
            <td>{Length}</td>
            <td>
                <Link state={item} to={`/dashboard/payment`}><button className="btn bg-teal-600 btn-sm text-yellow-300">pay</button></Link>
            </td>
            <td>
                <button onClick={() => handleDelete(item)} className="btn text-2xl btn-sm text-red-600"><FaTrashAlt></FaTrashAlt></button>
            </td>
        </tr>
    );
};

export default MySelectedClassRow;