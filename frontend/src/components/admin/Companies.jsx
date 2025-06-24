import { useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import CompaniesTable from "./CompaniesTable";
import useGetAllCompanies from "@/hooks/useGetAllCompanies";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearchCompanyByText } from "@/redux/companySlice";


const Companies = () => {
   const navigate = useNavigate()
   useGetAllCompanies()
   const [input , setInput] = useState("");
   const dispatch = useDispatch()

   const onChangeHandler = (e)=>{
      setInput(e.target.value);
   }
  
   useEffect(()=>{
      dispatch(setSearchCompanyByText(input))
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
               <Button onClick={() => navigate('/admin/companies/create')}>New Company</Button>
            </div>
            <CompaniesTable />
         </div>
      </div>
   )
}

export default Companies;