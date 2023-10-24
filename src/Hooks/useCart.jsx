import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCart = () => {

    const { user, loading } = useContext(AuthContext);
    
    const [axiosSecure] = useAxiosSecure();

    const { isLoading, refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        
        queryFn: async  () =>{
            const result = await axiosSecure.get(`/cart?email=${user?.email}`)
            console.log('res from axios', result);
            return result.data;
        },
    })
    
    return [cart,refetch, isLoading]
};

export default useCart;