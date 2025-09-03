import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { FaUserFriends, FaShoppingCart, FaStar } from "react-icons/fa";

const stats = [
  {
    icon: <FaUserFriends className="w-10 h-10 text-indigo-500" />,
    value: 1150,
    label: "Happy Clients",
  },
  {
    icon: <FaShoppingCart className="w-10 h-10 text-indigo-500" />,
    value: 5362,
    label: "Products Optimized",
  },
  {
    icon: <FaStar className="w-10 h-10 text-indigo-500" />,
    value: 49, // We'll show as 4.9
    label: "Client Rating",
    isRating: true,
  },
];

export default function HappyClientsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="relative bg-gray-900 py-20 px-4 text-white overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1470&q=80')",
        }}
      ></div>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Our Happy Clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-4 bg-gray-800/70 rounded-xl p-6 shadow-xl transform transition-all duration-700 hover:scale-105 ${
                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className="text-4xl">{stat.icon}</div>

              {/* Animated Number */}
              <h3 className="text-3xl md:text-4xl font-bold">
                {inView ? (
                  stat.isRating ? (
                    <CountUp
                      start={0}
                      end={stat.value / 10}
                      decimals={1}
                      duration={2}
                    />
                  ) : (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2}
                      separator=","
                    />
                  )
                ) : stat.isRating ? (
                  stat.value / 10
                ) : (
                  stat.value
                )}
                {stat.isRating && "/5"}
              </h3>

              {/* Label */}
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
