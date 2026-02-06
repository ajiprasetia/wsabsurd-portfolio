import React from "react";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const About = () => {
  const expertise = [
    { title: "Minimalist Logo Design", icon: "🎨" },
    { title: "Gaming Logo Design", icon: "🎮" },
    { title: "Logos for Content Creators", icon: "📹" },
    { title: "Micro-enterprise (SME) Logo Design", icon: "🏢" },
    { title: "Company Profile Videos", icon: "🎬" },
    { title: "Game Trailer Videos", icon: "🕹️" },
  ];

  const whyChooseMe = [
    {
      title: "Collaboration",
      description:
        "I treat every project as a collaborative effort. Your insights and suggestions are a vital part of the design process, ensuring that the final product reflects your vision.",
      icon: "🤝",
    },
    {
      title: "Attention to Detail",
      description:
        "I am renowned for my meticulous attention to detail, which enhances the quality of every design I create, from pixel accuracy to color harmony.",
      icon: "🔍",
    },
    {
      title: "On-Time Delivery",
      description:
        "I understand the importance of deadlines. You can trust that I will work diligently to complete tasks on time without sacrificing quality.",
      icon: "⏰",
    },
    {
      title: "Adaptability",
      description:
        "Both technology and design trends change rapidly. I pride myself on staying up-to-date on the latest design techniques and tools to ensure my work remains impactful and contemporary.",
      icon: "🚀",
    },
  ];

  const professionalSkills = [
    "Logo Design",
    "Brand Identity Design",
    "Graphic Design",
    "Social Media Design",
    "Gaming",
    "Corporate Branding",
    "Corporate Brand Identity",
    "Video Editing",
    "Video Design",
    "Video Commercial",
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-2xl shadow-purple-500/30">
                <img
                  src="/foto.jpeg"
                  alt="Wan Sobri A. - WSAbsurd"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-4 border-pink-500/30 animate-pulse"></div>
            </div>
          </div>
          <div>
            <h3 className="text-xl md:text-3xl font-semibold mb-4 text-purple-400">
              Graphic Designer | Logo Designer | Video Editor
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed text-base md:text-lg text-justify">
              I have 5 years of experience in logo design and video editing,
              using the Adobe family of tools. I'm here to provide world-class
              logo design and video editing at affordable prices that follow the
              latest trends.
            </p>
           <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-2 py-2 bg-orange-500/20 text-orange-400 rounded-lg text-xs border border-orange-500/30 flex items-center gap-2 font-semibold">
                <span className="w-5 h-5 bg-orange-600 rounded flex items-center justify-center text-white text-xs font-bold">
                  Ai
                </span>
                Illustrator
              </span>
              <span className="px-2 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-xs border border-blue-500/30 flex items-center gap-2 font-semibold">
                <span className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                  Ps
                </span>
                Photoshop
              </span>
              <span className="px-2 py-2 bg-purple-500/20 text-purple-400 rounded-lg text-xs border border-purple-500/30 flex items-center gap-2 font-semibold">
                <span className="w-5 h-5 bg-purple-600 rounded flex items-center justify-center text-white text-xs font-bold">
                  Pr
                </span>
                Premiere Pro
              </span>
              <span className="px-2 py-2 bg-indigo-500/20 text-indigo-400 rounded-lg text-xs border border-indigo-500/30 flex items-center gap-2 font-semibold">
                <span className="w-5 h-5 bg-indigo-600 rounded flex items-center justify-center text-white text-xs font-bold">
                  Ae
                </span>
                After Effects
              </span>

              <span className="px-2 py-2 bg-black/20 text-gray-300 rounded-lg text-xs border border-gray-500/30 flex items-center gap-2 font-semibold">
                <span className="w-5 h-5 bg-black rounded flex items-center justify-center overflow-hidden">
                  <img
                    src="/capcut.png"
                    alt="CapCut"
                    className="w-full h-full object-cover"
                  />
                </span>
                CapCut
              </span>
              <span className="px-2 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg text-xs border border-cyan-500/30 flex items-center gap-2 font-semibold">
                <span className="w-5 h-5 bg-white rounded flex items-center justify-center overflow-hidden">
                  <img
                    src="/affinity.png"
                    alt="Canva"
                    className="w-full h-full object-cover"
                  />
                </span>
                Affinity by Canva
              </span>
            </div>
          </div>
        </div>

        {/* Professional Skills Tags */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Professional <span className="text-purple-400">Skills</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {professionalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:border-purple-500 hover:scale-105 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* My Areas of Expertise */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            My Areas of <span className="text-purple-400">Expertise</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-all hover:transform hover:scale-105 border border-gray-700 hover:border-purple-500/50 cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Me */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Why Choose <span className="text-purple-400">Me</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {whyChooseMe.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="text-xm font-semibold text-purple-400 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="text-purple-400">Education</span>
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 md:p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-purple-400" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xm md:text-2xl font-semibold text-white mb-2">
                    Informatics Engineering
                  </h4>
                  <p className="text-purple-400 font-medium mb-2">
                    Universitas Islam Negeri Sultan Syarif Kasim
                  </p>
                  <p className="text-gray-400 text-sm mb-3">
                    Pekanbaru, Riau, Indonesia
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="text-purple-400" size={16} />
                    <span className="text-purple-300">2021 - 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Employment History */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Employment <span className="text-purple-400">History</span>
          </h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Creative Designer */}
            <div className="bg-gray-800 p-6 md:p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-purple-400" size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                    <div>
                      <h4 className="text-xm md:text-2xl font-semibold text-white mb-1">
                        Creative Designer
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar
                        className="text-purple-400 flex-shrink-0"
                        size={16}
                      />
                      <span className="text-purple-300 whitespace-nowrap">
                        March 2020 - Present
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-justify">
                    After two years of learning about skill design, specifically
                    in logo design, I tried publishing some of my work on
                    Instagram and received a good number of clients there, some
                    of whom grew to be devoted clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Creator */}
            <div className="bg-gray-800 p-6 md:p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-pink-400" size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                    <div>
                      <h4 className="text-xm md:text-2xl font-semibold text-white mb-1">
                        Content Creator
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar
                        className="text-pink-400 flex-shrink-0"
                        size={16}
                      />
                      <span className="text-pink-300 whitespace-nowrap">
                        January 2018 - Present
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-justify">
                    As an independent content creator, I enjoy using my talents
                    to branding my YouTube channel and showcasing my designs on
                    Instagram. All of my work, including the video editing, logo
                    design, and creation of the thumbnails and banners I use on
                    social media, it's all the result of my design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xl text-gray-300 mb-4">Thank you very much!</p>
          <p className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Best regards,
          </p>
          <p className="text-3xl font-bold text-white mt-2">Wan Sobri A.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
