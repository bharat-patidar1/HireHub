import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { USER_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'


// named export
export const Login = () => {

    const [input, setInput] = useState({
        email: "",
        password: "",
        role: ""
    })

    const { loading } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true))
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json "
                },
                withCredentials: true
            })
            if (res.data.success){
                dispatch(setUser(res.data.user))
                navigate("/")
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        } finally {
            dispatch(setLoading(false))
        }
    }


    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto' >
                <form onSubmit={submitHandler} className='w-1/2 border border-grey-200 rounded-md p-4 my-10'>
                    <h1 className="font-bold text-xl mb-5">Login</h1>
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input className="my-1"
                            type="email"
                            name="email"
                            value={input.email}
                            onChange={changeEventHandler}
                            placeholder="enter your email"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input className="my-1"
                            type="password"
                            name="password"
                            value={input.password}
                            onChange={changeEventHandler}
                            placeholder="enter your pass"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 my-3">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="role"
                                    value="Student"
                                    checked={input.role === 'Student'}
                                    onChange={changeEventHandler}
                                    className="accent-blue-600 cursor-pointer" />
                                Student
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="role"
                                    value="Recruiter"
                                    checked={input.role === 'Recruiter'}
                                    onChange={changeEventHandler}
                                    className="accent-blue-600 cursor-pointer" />
                                Recruiter
                            </label>
                        </div>
                    </div>

                    {
                        loading ? (
                            <Button className="w-full my-4"><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait</Button>

                        ) : (
                            <Button type="submit" className="w-full my-4 ">Login</Button>
                        ) 
                    }


                    <span className='text-sm'>Don't have an account? <Link to={'/signup'} className='text-blue-500'>Signup</Link> </span>
                </form>
            </div>
        </div>
    )
}
