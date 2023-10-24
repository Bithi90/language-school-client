import useCart from "../../../Hooks/useCart";
import MySelectedClassRow from "./MySelectedClassRow";


const MySelectedClass = () => {
    const [cart] = useCart();
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    
                    <thead>
                        <tr className="font-extrabold text-md bg-teal-600 text-yellow-300">
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instractor Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th></th>
                            <th>Pay</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index,) => <MySelectedClassRow
                                key={item._id}
                                item={item}
                                index={index}
                            ></MySelectedClassRow>)
                        }
                    </tbody>
                    {/* foot */}


                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;