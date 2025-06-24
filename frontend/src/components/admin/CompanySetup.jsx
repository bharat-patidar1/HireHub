import React from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { useState } from 'react'
import { toast } from 'sonner'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { setSingleCompany } from '@/redux/companySlice'
import { useEffect } from 'react'
import useGetCompanyById from '@/hooks/useGetCompanyById'

const CompanySetup = () => {
    const params = useParams();
    const companyId = params.id
    useGetCompanyById(companyId) 
    const navigate = useNavigate();
    const [loading , setLoading] = useState(false)
    const singleCompany = useSelector(store=>store.company.singleCompany)
    const [input, setInput] = useState({
        name : "",
        description : "",
        website : "",
        location : "",
        file : null
    });

    const onChangeHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
        console.log(input)
    }

    const onFileChangeHandler = (e) => {
        setInput({ ...input, file : e.target.files?.[0] })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            
            const formData = new FormData();
            formData.append("name", input.name)
            formData.append("description", input.description)
            formData.append("website", input.website)
            formData.append("location", input.location)
            formData.append("file", input.file)
            setLoading(true)
            const res = await axios.put(`${COMPANY_API_END_POINT}/update/${companyId}`, formData, {
                headers: {
                    "Content-Type": 'multipart/form-data'
                },
                withCredentials: true
            })
            if (res.data.success) {
                toast.success(res.data.message)
                navigate('/admin/companies')
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }
    }

    //agr hum input element ki value direct singleCompany se set krne ki koshish krenge to vo change nhi hogi .
    //  onchnage effect uss value ko change + update dono krta h . isliye input box ki value always of onChnage variable
    //jese hi hum kuch type krenge vo value variable m. set hojaegi and then uski value box m show hogi. isliye inout ko value allot krni
    //pdegi initial wali by single job with useEffect best way

    useEffect(()=>{
        setInput({
             name : singleCompany.name || "",
             description : singleCompany.description || "",
             website : singleCompany.website || "",
             location : singleCompany.location || "",
             file : singleCompany.logo || "",
        })
    },[singleCompany])
    return (
        <div>
            <Navbar />
            <div className='max-w-xl mx-auto my-10'>
                <form onSubmit={onSubmitHandler}>
                    <div className="flex items-center gap-5 p-8">
                        <Button onClick={()=>navigate('/admin/companies')} variant="outline" className="flex items-center gap-2 text-gray-500">
                            <ArrowLeft />
                            <span>Back</span>
                        </Button>
                        <h1 className='font-bold text-xl'>Company Setup</h1>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <Label>Company Name</Label>
                            <Input
                                type="text"
                                name="name"
                                value={input?.name}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div>
                            <Label>Description</Label>
                            <Input
                                type="text"
                                name="description"
                                value={input?.description}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div>
                            <Label>Website</Label>
                            <Input
                                type="text"
                                name="website"
                                value={input?.website}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div>
                            <Label>Location</Label>
                            <Input
                                type="text"
                                name="location"
                                value={input?.location}
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div>
                            <Label>Logo</Label>
                            <Input
                                type="file"
                                accept="image/*"
                                onChange={onFileChangeHandler}
                            />
                        </div>
                    </div>

                    {
                        loading ? (
                            <Button className="w-full my-4"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait</Button>

                        ) : (
                            <Button type="submit" className="w-full my-4 ">Update</Button>
                        )
                    }
                </form>
            </div>
        </div>
    )
}

export default CompanySetup