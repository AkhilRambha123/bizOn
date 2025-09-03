import { FaUserGraduate, FaLaptop, FaBullhorn, FaPaperPlane, FaDollarSign, FaBriefcase, FaSearchDollar, FaHome } from 'react-icons/fa';

const audienceList = [
  { icon: <FaUserGraduate />, label: "Students" },
  { icon: <FaLaptop />, label: "Freelancers" },
  { icon: <FaBullhorn />, label: "Marketers" },
  { icon: <FaPaperPlane />, label: "Digital Entrepreneurs" },
  { icon: <FaSearchDollar />, label: "Affiliate Marketers" },
  { icon: <FaDollarSign />, label: "Business Owners" },
  { icon: <FaBriefcase />, label: "Job Professionals" },
  { icon: <FaSearchDollar />, label: "Self-Employed" },
  { icon: <FaHome />, label: "Housewives" },
];

export default function TargetAudienceSection() {
  return (
    <section className="bg-gray-900 py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        For Whom Is This Service For
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {audienceList.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg hover:bg-indigo-600 font-medium transition-colors cursor-pointer"
          >
            <div className="text-indigo-500 text-2xl">{item.icon}</div>
            <span className="text-white font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
