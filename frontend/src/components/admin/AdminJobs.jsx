import { useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearchJobByText } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import AdminJobsTable from "./AdminJobsTable";
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs";


const AdminJobs = () => {
  useGetAllAdminJobs()
   const navigate = useNavigate()
   useGetAllJobs()
   const [input , setInput] = useState("");
   const dispatch = useDispatch()

   const onChangeHandler = (e)=>{
      setInput(e.target.value);
   }
  
   useEffect(()=>{
      dispatch(setSearchJobByText(input))
   },[input])

   
   return (
      <div>
         <Navbar />
         <div className="max-w-6xl mx-auto my-10">
            <div className="flex items-center justify-between my-5">
               <Input
                  className="w-fit"
                  value={input}
                  onChange={onChangeHandler}
                  placeholder="Filter by name"
               />
               <Button onClick={() => navigate('/admin/jobs/create')}>Post New Job</Button>
            </div>
            <AdminJobsTable />
         </div>
      </div>
   )
}

export default AdminJobs;