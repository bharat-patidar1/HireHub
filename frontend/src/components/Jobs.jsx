import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";



const Jobs = () => {

    const { allJobs } = useSelector(store => store.job)

    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto mt-5">
                <div className="flex gap-5">
                    <div className="w-20%">
                        <FilterCard />
                    </div>
                    {
                        allJobs.length <= 0 ? <span>Job Not Found</span> :
                            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
                                <div className="grid grid-cols-3 gap-4">
                                    {
                                        allJobs.length !== 0 ? (
                                            allJobs.map((job, index) => (
                                                <div>
                                                    <Job job={job} index={index} />
                                                </div>
                                            ))
                                        ) : (
                                            <span> No Jobs Available</span>
                                        )
                                    }
                                </div>
                            </div>

                    }
                </div>
            </div>
        </div>
    )
}

export default Jobs;