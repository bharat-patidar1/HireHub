import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function HeroSection1() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [query , setQuery] = useState("");
  const onChangeHandler = (e)=>{
    setQuery(e.target.value)
  }

  const searchJobHandler =()=>{
    dispatch(setSearchedQuery(query))
    navigate('/browse')
  }

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Find Your <span className="text-[#6A38C2]">Dream Job</span> Here
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Thousands of opportunities waiting for you.
        </p>
        <div className="flex justify-center gap-4">
          <input
            type="text"
            value={query}
            onChange={onChangeHandler}
            placeholder="Search jobs..."
            className="w-80 px-4 py-2 border border-gray-300 rounded-xl"
          />
          <Button onClick={searchJobHandler} className="bg-[#6A38C2] text-white px-6 py-2 rounded-xl">
            Search
          </Button>
        </div>
      </div>
    </section>
  );
} 