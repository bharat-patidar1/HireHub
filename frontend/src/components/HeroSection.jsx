import { Search } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const HeroSection = () => {

    return (
        <div className="text-center">
            <div className="flex flex-col gap-5 my-10">
                <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">No. 1 Hire Hub Website</span>
                <h1 className="text-5xl font-bold ">Search , Apply &  <br /> Get Your <span className="text-[#6A38C2]">Dream Jobs</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nostrum?</p>
                <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full mx-auto items-center gap-4">
                    <input
                        type="text"
                        placeholder="find your dream jobs"
                        className="outline-none border-none w-full"
                    />
                    <Button className="cursor-pointer rounded-r-full bg-[#6A38C2]">
                        <Search className="h-5 w-5"/>
                    </Button>
                </div>
            </div>
        </div>
    );
}
export default HeroSection;