import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



export default function CheckAuthentication({children}){
    const {user} = useSelector(store=>store.auth)
    const navigate = useNavigate();
    if(user == null){
        return navigate('/login')
    } else {
        return children
    }
}