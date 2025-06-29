import { Contact, Mail, Pen } from "lucide-react"
import Navbar from "./shared/Navbar"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Badge } from '../components/ui/badge'
import { Label } from "./ui/label"
import AppliedJobTable from "./AppliedJobTable"
import { useState } from "react"
import UpdateProfileDialog from "./UpdateProfileDialog"
import { useSelector } from "react-redux"
import useGetAllAppliedJobs from "@/hooks/useGetAllAppliedJobs"



const Profile = () => {

    useGetAllAppliedJobs()

    const { user } = useSelector(store => store.auth)
    const [open, setOpen] = useState(false)

    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
                <div className="flex justify-between">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-24 w-24">
                            <AvatarImage src={user?.profile?.profilePhoto} alt="profile" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="font-medium text-xl">{user?.fullname}</h1>
                            <p>{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <Button onClick={() => { setOpen(true) }} className="text-right" variant="outline"><Pen /></Button>
                </div>
                <div className="my-5">
                    <div className="flex items-center gap-3 my-2">
                        <Mail />
                        <span>{user?.email}</span>
                    </div>

                    <div className="flex items-center gap-3 my-2">
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>
                <div className="my-5">
                    <h1>Skills</h1>
                    <div className="flex items center gap-1">
                        {
                            user?.profile?.skills?.length !== 0 ? (user?.profile?.skills?.map((item, idx) => <Badge key={idx}>{item}</Badge>)) : (
                                <span>No skills</span>
                            )
                        }
                    </div>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label className="text-md font-bold ">Resume</Label>
                    {

                        user?.profile?.resume ? <a target="blank" href={user?.profile?.resume} className="text-blue-500 w-full hover:underline cursor-pointer">{user?.profile?.resumeOriginalName}</a> : (
                            <span>No resume</span>
                        )
                    }
                </div>
            </div>
            <div className="max-w-4xl bg-white mx-auto rounded-2xl">
                <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
                {/* AppliedJob table component */}
                <AppliedJobTable />
            </div>
                    <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    )
}

export default Profile