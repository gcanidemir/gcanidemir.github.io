import { useState } from "react";
import { Gamepad2, Brain, Code2, Terminal } from "lucide-react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("fullstack");

  const projectsData = {
    fullstack: [
      {
        title: "Financial Statement Analysis Tool (Senior Project)",
        description:
          "Led backend API integration and model deployment of full-stack application for HAVELSAN’s KOVAN system to analyze financial data and forecast metrics using machine learning.",
        technologies: [
          "Angular",
          "Spring Boot",
          "PostgreSQL",
          "Scikit-Learn",
          "Statsmodels",
        ],
        githubUrl: "",
        liveUrl: "",
        imageUrl: ""
      },
      {
        title: "StayEasy - Hostel Booking Application",
        description:
          "Designed and implemented end-to-end reservation platform with admin panel and role-based access. Integrated availability checks and room management features.",
        technologies: [
          "React",
          "Spring Boot",
          "PostgreSQL",
          "Tailwind CSS",
          "ShadCN",
          "Redux",
          "Docker",
        ],
        githubUrl: "",
        liveUrl: "",
        imageUrl: "StayEasy_-_Hostel_Booking_Application.jpg"
      },
      {
        title: "Weather Forecast Application",
        description:
          "Built a web application displaying real-time weather data using the OpenWeather API.",
        technologies: [
          "React",
          "Axios",
          "Openweather API",
        ],
        githubUrl: "https://github.com/gcanidemir/Weather_Forecast",
        liveUrl: "https://www.youtube.com/watch?v=2egZ6ksf7AM",
        imageUrl: "Weather_Forecast_Application.jpg"
      },
    ],
    ai: [
      {
        title: "Manga Translator",
        description:
          "Created an application that translates Japanese comic book text to English using OCR",
        technologies: [
          "MangaOCR",
          "PaddleOCR",
          "OpenCV",
          "OpusMT",
        ],
        githubUrl: "",
        liveUrl: "",
        imageUrl: ""
      },
    ],
    gamedev: [
      {
        title: "Pawstro (Brackeys Game Jam 2024.2)",
        description:
          "Wave-based survival, resource gathering, and base-building game. Built Enemy AI&Navigation System from scratch.",
        technologies: ["Unity"],
        githubUrl: "https://github.com/gcanidemir/Pawstro",
        liveUrl: "https://www.youtube.com/watch?v=lEQqwYoh3Zc",
        imageUrl: "Pawstro_(Brackeys_Game_Jam_2024.2).jpg"
      },
      {
        title: "FallrRise",
        description:
          "Wave based 3D arena fighting game.",
        technologies: ["Unity"],
        githubUrl: "https://github.com/gcanidemir/FallrRise",
        liveUrl: "https://www.youtube.com/watch?v=zuSTkT8jwIA",
        imageUrl: "FallrRise.jpg"
      },
      {
        title: "Rat Hunter",
        description:
          "A simple prototype inspired by Mario mechanics",
        technologies: ["Unity"],
        githubUrl: "https://github.com/gcanidemir/RatHunter",
        liveUrl: "https://www.youtube.com/watch?v=aW_R2H_cqqE",
        imageUrl: "Rat_Hunter.jpg"
      },
      {
        title: "Crypt Raider",
        description:
          "A puzzle game to find treaseure in a crypt and escape with it.",
        technologies: ["Unreal Engine"],
        githubUrl: "https://github.com/gcanidemir/CryptRaider",
        liveUrl: "https://www.youtube.com/watch?v=ukpX9djl1fQ",
        imageUrl: "Crypt_Raider.jpg"
      }      
    ],
  };

  const tabs = [
    { id: "fullstack", label: "FULL STACK", icon: Code2 },
    { id: "ai", label: "AI/ML", icon: Brain },
    { id: "gamedev", label: "GAME DEV", icon: Gamepad2 },
  ];

  return (
    <section
      className="py-20 bg-black text-green-400 min-h-screen"
      id="projects"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-4">
            <Terminal className="mr-3 text-green-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-mono font-bold text-green-400">
              PROJECTS
            </h2>
          </div>
          <p className="text-lg text-green-300 max-w-2xl mx-auto font-mono">
            Showcasing digital artifacts across different domains of software
            development
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-col items-center mb-12">
          <div
            className="bg-black border border-green-400 rounded p-2 w-full flex flex-col items-center"
            style={{ minWidth: "180px", width: "fit-content" }}
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center px-6 py-3 font-mono transition-all duration-300 w-full text-center ${
                    activeTab === tab.id
                      ? "bg-green-400 text-black border border-green-400"
                      : "text-green-400 hover:text-green-300 hover:bg-green-400/10"
                  }`}
                >
                  <Icon size={20} className="mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData[activeTab as keyof typeof projectsData].map(
            (project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                imageUrl={project.imageUrl}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
