import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import axios from "axios";

const Navbar = () => {
  const { user } = useSelector(store => store.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true })
      if (res.data.success) {
        dispatch(setUser(null))
        navigate('/')
        toast.success(res.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 h-16">
        {/* Brand */}
        <Link to="/" className="text-2xl font-extrabold tracking-tight">
          Hire<span className="text-[#6A38C2]">Hub</span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-12">
          <ul className="flex items-center gap-6 text-gray-700 font-medium text-sm">

            {
              user && user.role === "Recruiter" ? (
                <>
                  <li><Link to="/admin/companies" className="hover:text-[#6A38C2] transition">Companies</Link></li>
                  <li><Link to="/admin/jobs" className="hover:text-[#6A38C2] transition">Jobs</Link></li>
                </>
              ) : (
                <>
                  <li><Link to="/" className="hover:text-[#6A38C2] transition">Home</Link></li>
                  <li><Link to="/jobs" className="hover:text-[#6A38C2] transition">Jobs</Link></li>
                  <li><Link to="/browse" className="hover:text-[#6A38C2] transition">Browse</Link></li>
                </>
              )
            }


          </ul>

          {/* Auth or Profile */}
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline" className="text-sm px-4 py-2">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#6A38C2] hover:bg-[#572aa1] text-white text-sm px-4 py-2">
                  Get Started
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user?.profile?.profilePhoto} alt="User avatar" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={user?.profile?.profilePhoto} alt="User avatar" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-sm">{user?.fullname}</h4>
                    <p className="text-xs text-muted-foreground">{user?.profile?.bio}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-2 text-gray-700 text-sm">
                  {
                    user && user.role === "Student" && (
                      <Link to="/profile" className="flex items-center gap-2 hover:text-[#6A38C2] transition">
                        <User2 size={16} />
                        <span>My Profile</span>
                      </Link>
                    )
                  }
                  <button onClick={logoutHandler} className="flex items-center gap-2 text-left hover:text-[#F83002] transition">
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
