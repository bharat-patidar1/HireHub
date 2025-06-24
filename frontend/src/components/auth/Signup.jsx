import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import store from '@/redux/store'
import { setLoading } from '@/redux/authSlice'

export const Signup = () => {

    const [data, setData] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        role: "",
        file: ""
    })
    const { loading } = useSelector(store => store.auth);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const changeEventHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const changeFileHandler = (e) => {
        setData({ ...data, file: e.target.files?.[0] });
    }

    // api call hogi isliye async fn. bnaenge
    const submitHandler = async(e)=> {
        e.preventDefault();
        try {
            dispatch(setLoading(true))
           const formData = new FormData()
           formData.append("fullname"  , data.fullname)
           formData.append("email"  , data.email)
           formData.append("phoneNumber"  , data.phoneNumber)
           formData.append("password"  , data.password)
           formData.append("role"  , data.role)
           if(data.file)
           formData.append("file"  , data.file)

           const res =  await axios.post(`${USER_API_END_POINT}/register` , formData , {
            headers:{
                "Content-Type" :  "multipart/form-data"
            },
            withCredentials : true
           })
           if(res.data.success){
               navigate("/login")
               toast.success(res.data.message)
           }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }finally {
                    dispatch(setLoading(false))
                }
    }

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto' >
                <form onSubmit={submitHandler} className='w-1/2 border border-grey-200 rounded-md p-4 my-10'>
                    <h1 className="font-bold text-xl mb-5">Sign Up</h1>
                    <div className='my-2'>
                        <Label>Full Name</Label>
                        <Input className="my-1"
                            type="text"
                            value={data.fullname}
                            name="fullname"
                            onChange={changeEventHandler}
                            placeholder="enter your name"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input className="my-1"
                            type="email"
                            value={data.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="enter your email"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Phone Number</Label>
                        <Input className="my-1"
                            type="text"
                            name="phoneNumber"
                            value={data.phoneNumber}
                            onChange={changeEventHandler}
                            placeholder="enter your number"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input className="my-1"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={changeEventHandler}
                            placeholder="enter your number"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 my-3">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="role"
                                    value="Student"
                                    checked={data.role === 'Student'}
                                    onChange={changeEventHandler}
                                    className="accent-blue-600 cursor-pointer" />
                                Student
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="role"
                                    value="Recruiter"
                                    checked={data.role === 'Recruiter'}
                                    onChange={changeEventHandler}
                                    className="accent-blue-600 cursor-pointer" />
                                Recruiter
                            </label>
                        </div>
                        <div className='flex items-center gap-2 '>
                            <Label>Profile</Label>
                            <Input
                                accept="image/*"
                                type="file"
                                onChange={changeFileHandler}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                    {
                        loading ? (
                            <Button className="w-full my-4"><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait</Button>

                        ) : (
                            <Button type="submit" className="w-full my-4 ">Signup</Button>
                        ) 
                    }
                    <span className='text-sm'>Already have an account? <Link to={'/login'} className='text-blue-500'>  Login </Link> </span>
                </form>
            </div>
        </div>
    )
}
