import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";




const CheckAuthentication = (Children)=>{

    const {user} = useSelector(store=>store.auth);
   if(user == null){
    Navigate('/login')
   }
    return(
        Children
    );
}
export default CheckAuthentication;