import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterData = [
    {
        filterType: "Location",
        array: ["Delhi", "Bengluru", "hyderabad", "pune", "mumbai"]
    },
    {
        filterType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "Full Stack Developer"]
    },
    {
        filterType: "Salary",
        array: ["0-40K", "40-1lakh", "1-4lakh"]
    }
]

const FilterCard = () => {

    return (
        <div className="w-full bg-white p-3 rounded-md ">
            <h1 className="font-bold text-lg">Filter Jobs</h1>
            <hr className="mt-3"/>
            <RadioGroup>
                {
                    filterData.map((data,index)=>(
                        <div>
                            <h1 className="font-bold text-lg">{data.filterType}</h1>
                            {
                            data.array.map((item , idx)=>(
                                <div className="flex space-x-2 my-2 items-center">
                                    <RadioGroupItem value={item}/>
                                    <Label>{item}</Label>
                                </div>
                            ))
                            }
                        </div>
                    ))
                }
            </RadioGroup>
        </div>
    );
}

export default FilterCard;



