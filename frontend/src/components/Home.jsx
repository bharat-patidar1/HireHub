import useGetAllJobs from "@/hooks/useGetAllJobs";
import CallToAction from "./CallToAction";
import CategoryCarousel from "./CategoryCarousel";
import Features from "./Features";
// import HeroSection from "./HeroSection";
import HeroSection1 from "./HeroSection1";
import LatestJobs from "./LatestJobs";
import Navbar from "./shared/Navbar";
import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    useGetAllJobs()
    const { user } = useSelector(store => store.auth)
    const navigate = useNavigate();
    useEffect(() => {
        if (user?.role === "Recruiter") {
            navigate('admin/companies')
        }
    }, [])
    return (
        <div>
            <Navbar />
            <HeroSection1 />
            <CategoryCarousel />
            <LatestJobs />
            <Features />
            <CallToAction />
        </div>
    );
}