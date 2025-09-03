import { useInView } from "react-intersection-observer";
import { FaRocket, FaCogs, FaBullhorn, FaRobot, FaStar } from "react-icons/fa";

const features = [
  {
    icon: <FaRocket className="text-yellow-500 w-6 h-6" />,
    text: "The fastest way to kickstart your ecommerce journey from scratch, start selling products and make profits within the first month without impacting your job schedule",
    highlight: ["kickstart", "first month", "profits"],
  },
  {
    icon: <FaCogs className="text-yellow-500 w-6 h-6" />,
    text: "Setting up the systems and processes inside your ecommerce business so smoothly that your business runs on automation",
    highlight: ["systems", "processes", "automation"],
  },
  {
    icon: <FaBullhorn className="text-yellow-500 w-6 h-6" />,
    text: "Running profitable Meta Ads to drive high-quality traffic to your ecommerce store and make record-breaking sales",
    highlight: ["Meta Ads", "high-quality traffic", "record-breaking sales"],
  },
  {
    icon: <FaRobot className="text-yellow-500 w-6 h-6" />,
    text: "Automate your ecommerce business entirely, such as delivery systems, product handling, stock management, etc. – You Don’t Have To Do Anything At All!",
    highlight: ["Automate", "delivery systems", "stock management", "You Don’t Have To Do Anything"],
  },

];

export default function EcommerceSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="bg-gray-900 py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">

        {/* Left Image Placeholder */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <img
            src="https://chartio.com/images/blog/how-to-create-a-web-analytics-dashboard/how-to-create-a-web-analytics-dashboard-0.png"
            alt="Ecommerce Stats"
            className={`rounded-lg shadow-lg transition-transform duration-700 ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            width={300} 
         />
          <img
            src="https://www.statology.org/wp-content/uploads/2021/10/combo6.png"
            alt="Ecommerce Stats"
            className={`rounded-lg shadow-lg transition-transform duration-700 ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            width={300}
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 transition-all duration-700 ${inView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div>{feature.icon}</div>

              {/* Text */}
              <p className="text-lg md:text-xl">
                {feature.text.split(" ").map((word, i) => {
                  const highlightMatch = feature.highlight.some(h => word.includes(h));
                  return (
                    <span key={i} className={highlightMatch ? "text-yellow-500 font-bold" : ""}>
                      {word}{" "}
                    </span>
                  );
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
