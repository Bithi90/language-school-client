/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useCart from "../../Hooks/useCart";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Classes = ({ item }) => {
    const { courseName, image, price, rating, Length, _id, instractorName } = item;
    const [disabled, setDisabled] = useState(false);
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSelect = data => { 

        console.log(data);
        if (user && user.email) {
            const selectedItem = { courseName, image, price, rating, instractorName, classItemId: _id, email: user.email };
            fetch('https://language-server-brown.vercel.app//cart', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedItem)

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added on the selected class',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        setDisabled(true);
                    }

                })
        }
        else {
            Swal.fire({
                title: 'Please login to add the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className="card w-74 bg-base-100 border border-slate-400">
            <figure className="">
                <img src={image} alt="Shoes" className=" " />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{courseName}</h2>
                <div className="flex justify-center gap-10">
                    <p>Rating:{rating}</p>
                    <p className="text-teal-600 font-bold ">${price}</p>
                </div>
                <p className=" text-center py-2 border-t-4 border-teal-600">Length : {Length}</p>
                <button onClick={() => handleSelect(item)} disabled={disabled} className="btn text-yellow-300 bg-teal-600 btn-active btn-sm ">Add To Cart</button>
            </div>
        </div>
    );
};

export default Classes;