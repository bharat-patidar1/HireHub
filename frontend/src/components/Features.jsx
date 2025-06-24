import { Briefcase, Globe, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Verified Companies",
    desc: "Work with top verified employers.",
    icon: <ShieldCheck className="text-[#6A38C2] w-6 h-6" />,
  },
  {
    title: "Global Reach",
    desc: "Opportunities from across the world.",
    icon: <Globe className="text-[#6A38C2] w-6 h-6" />,
  },
  {
    title: "Top Roles",
    desc: "Find jobs that fit your skills.",
    icon: <Briefcase className="text-[#6A38C2] w-6 h-6" />,
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition-all"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
