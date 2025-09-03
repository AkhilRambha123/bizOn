// src/components/VideosSection.jsx
import { useState } from "react";
import { motion } from "framer-motion";
// import { video1 } from "../assets/videos"; // Adjust the path as necessary

const videos = [
  { title: "Video 1", src: "https://youtu.be/B8ntYrwdbfA?si=VmTKnOvEGkFxNJEN" },
  { title: "Video 2", src: "https://youtu.be/B8ntYrwdbfA?si=VmTKnOvEGkFxNJEN" },
  { title: "Video 3", src: "https://youtu.be/B8ntYrwdbfA?si=VmTKnOvEGkFxNJEN" },
  { title: "Video 4", src: "https://youtu.be/B8ntYrwdbfA?si=VmTKnOvEGkFxNJEN" },
];

export default function VideosSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">Our Videos</h2>
          <p className="text-slate-400 mt-2">
            Watch our latest content and tutorials
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-black"
              onClick={() => setActiveVideo(video.src)}
            >
              <video
                src={video.src}
                className="w-full h-48 object-cover rounded-2xl"
                muted
                autoPlay
                loop
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                <span className="text-white text-lg font-semibold">{video.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional Fullscreen Modal */}
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <div className="relative w-full max-w-3xl">
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
                onClick={() => setActiveVideo(null)}
              >
                &times;
              </button>
              <video src={activeVideo} controls autoPlay className="w-full rounded-2xl" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
