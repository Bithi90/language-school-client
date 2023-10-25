import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';


const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, role: 'student' }
                fetch('https://language-server-brown.vercel.app//user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });

                    })


            })
    }

    return (
        <div className="text-center">
            <div className="">__OR__</div>
            <button onClick={handleGoogleSignIn} className="btn btn-circle text-3xl mb-4"><FcGoogle></FcGoogle></button>
        </div>
    );
};

export default SocialLogin;