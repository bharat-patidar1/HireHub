import { Edit2, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import useGetAllCompanies from "@/hooks/useGetAllCompanies";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";




const CompaniesTable = () => {
    const allCompanies = useSelector(store => store.company.allCompanies)
    const searchCompanyByText = useSelector(store=>store.company.searchCompanyByText);
    const [filterCompany , setFilterCompany] = useState(allCompanies)
    const navigate = useNavigate();
    useEffect(()=>{

        const filteredCompany = allCompanies.length >= 0  && allCompanies.filter((company)=>{
            if(!searchCompanyByText){
                return true
            }
            return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase())
        });
        setFilterCompany(filteredCompany)
    },[allCompanies , searchCompanyByText])

    return (
        <div>
            <Table>
                <TableCaption>List of your registered Companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className='text-right'>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        filterCompany?.length === 0 ? (<span>No Companies Found</span>

                        ) : (
                            filterCompany?.map((company) => {
                                const companyId = company._id;
                                return (
                                    <TableRow>
                                        <TableCell>
                                            <Avatar>
                                                <AvatarImage alt="img" src={company?.logo}></AvatarImage>
                                            </Avatar>
                                        </TableCell>
                                        <TableCell>{company?.name}</TableCell>
                                        <TableCell>{company?.createdAt.split("T")[0]}</TableCell>
                                        <TableCell className="text-right cursor-pointer">
                                            <Popover>
                                                <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                                <PopoverContent className="w-32">
                                                    <div onClick={()=>navigate(`/admin/companies/${companyId}`)} className="flex items-center gap-2 w-fit cursor-pointer">
                                                        <Edit2 className="w-4 " />
                                                        <span>Edit</span>
                                                    </div>
                                                </PopoverContent>
                                            </Popover>
                                        </TableCell>

                                    </TableRow>
                                )
                            })
                        )
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default CompaniesTable;