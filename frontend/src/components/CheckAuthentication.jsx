const { useSelector } = require("react-redux");
const { useNavigate } = require("react-router-dom");



const CheckAuthentication = (Children)=>{

    const {user} = useSelector(store=>store.auth);
    const isAuthenticated = false;
    const navigate = useNavigate();
    if(user != null){
        isAuthenticated = true;
    } else{
        isAuthenticated = false
    }
    if(!isAuthenticated){
        navigate('/login')
    }
    return(
        Children
    );
}
export default CheckAuthentication;