
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const categories = [
  "Frontend Developer",
  "Backend Developer",
  "Data Analyst",
  "Graphics Design",
  "Full Stack Developer"
];

export default function CategoryCarousel() {
const dispatch = useDispatch()
const navigate = useNavigate()

  const onSearchHandler = (query)=>{
    dispatch(setSearchedQuery(query))
    navigate('/browse')
  }

  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {
            categories.map((cat, index) => (
              <CarouselItem className="md:basis-1/2 lg:basis:1/3">
                <Button onClick={()=>onSearchHandler(cat)} className="rounded-full" variant="outline">{cat}</Button>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
