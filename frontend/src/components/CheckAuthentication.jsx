import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";




const CheckAuthentication = (Children)=>{
    const navigate = useNavigate();
    const {user} = useSelector(store=>store.auth);
   if(user == null){
    navigate('/login')
   }
    return (user == null) ? <Login/> :  Children;
}
export default CheckAuthentication;