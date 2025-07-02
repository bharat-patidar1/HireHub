import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



export default function CheckAuthentication({ children }) {
    const { user } = useSelector(store => store.auth)
    const navigate = useNavigate();
    useEffect(() => {
        if (user == null) {
            navigate("/login");
        }
    }, [user, navigate]);
    if(user == null){
        return null
    } else{
        return children
    }

}