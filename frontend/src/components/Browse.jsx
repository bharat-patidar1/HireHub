import { useSelector } from "react-redux";
import Job from "./Job";
import Navbar from "./shared/Navbar";
import { useEffect } from "react";
import { JOB_API_END_POINT } from "@/utils/constant";
import { useState } from "react";
import axios from "axios";

const Browse = () => {

    const [filterJobs, setFilterJobs] = useState([]);
    const {searchedQuery} = useSelector(store=>store.job)

    useEffect(() => {
        const fetchFilteredJobs = async () => {
            try {
                console.log("running")
                const res = await axios.get(`${JOB_API_END_POINT}/getAllJobs/?keyword=${searchedQuery}`, { withCredentials: true })
                if (res.data.success) {
                    setFilterJobs(res.data.jobs)
                    console.log(res.data.jobs)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchFilteredJobs()
    },[setFilterJobs])

    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto my-10">
                <h1 className="font-bold text-xl my-10">Search Results {filterJobs.length}</h1>
                <div className="grid grid-cols-3 gap-4  ">
                    {
                        filterJobs?.length <= 0 ? (<span>No Jobs for this category</span>) : (
                            filterJobs.map((job, index) => {
                                return (
                                    <Job job={job} index={index} />
                                )
                            })
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Browse;