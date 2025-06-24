import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function CallToAction() {
  return (
    <section className="py-16 bg-[#6A38C2] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Hired?</h2>
        <p className="mb-6">
          Sign up and let companies find you. Start your journey today.
        </p>
        <Link to="/signup">
        <Button variant="secondary" className="bg-white text-[#6A38C2]">
          Join Now
        </Button>
        </Link>
      </div>
    </section>
  );
}