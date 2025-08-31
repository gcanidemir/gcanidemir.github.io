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
      {
        title: "WellNet - Patient Management System",
        description:
          "Developed a comprehensive patient management system with billing, analytics and authentication features.",
        technologies: [
          "Java Spring Boot",
          "Spring Cloud Gateway",
          "gRPC",
          "Apache Kafka",
          "Docker & Docker Compose",
          "Maven",
          "Protocol Buffers",
        ],
        githubUrl: "https://github.com/gcanidemir/WellNet",
        liveUrl: "",
        imageUrl: "WellNet_-_Patient_Management_System.png"
      }      
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
        technologies: ["Unity","C#"],
        githubUrl: "https://github.com/gcanidemir/Pawstro",
        liveUrl: "https://www.youtube.com/watch?v=lEQqwYoh3Zc",
        imageUrl: "Pawstro_(Brackeys_Game_Jam_2024.2).jpg"
      },
      {
        title: "FallrRise",
        description:
          "Wave based 3D arena fighting game.",
        technologies: ["Unity", "C#"],
        githubUrl: "https://github.com/gcanidemir/FallrRise",
        liveUrl: "https://www.youtube.com/watch?v=zuSTkT8jwIA",
        imageUrl: "FallrRise.jpg"
      },
      {
        title: "Rat Hunter",
        description:
          "A simple prototype inspired by Mario mechanics",
        technologies: ["Unity", "C#"],
        githubUrl: "https://github.com/gcanidemir/RatHunter",
        liveUrl: "https://www.youtube.com/watch?v=aW_R2H_cqqE",
        imageUrl: "Rat_Hunter.jpg"
      },
      {
        title: "Crypt Raider",
        description:
          "A puzzle game to find treaseure in a crypt and escape with it.",
        technologies: ["Unreal Engine", "C++"],
        githubUrl: "https://github.com/gcanidemir/CryptRaider",
        liveUrl: "https://www.youtube.com/watch?v=ukpX9djl1fQ",
        imageUrl: "Crypt_Raider.jpg"
      },
      {
        title: "Shooter Game",
        description:
          "A third person shooter built in Unreal Engine 5. It demonstrates core FPS mechanics—player movement, shooting, enemy AI, and HUD integration; wrapped in a clean, modular architecture.",
        technologies: ["Unreal Engine", "C++"],
        githubUrl: "https://github.com/gcanidemir/ShooterGame",
        liveUrl: "https://www.youtube.com/watch?v=UanbFphTljU",
        imageUrl: "Shooter_Game.jpg"
      },
      {
        title: "Toon Tanks",
        description:
          "Third-person tank battle game developed using Unreal Engine 5. It features a player-controlled tank battling AI-controlled enemy turrets.",
        technologies: ["Unreal Engine", "C++"],
        githubUrl: "https://github.com/gcanidemir/ToonTanks",
        liveUrl: "https://www.youtube.com/watch?v=AA0GQr6yCU0",
        imageUrl: "Toon_Tanks.jpg"
      },
      {
        title: "Obstacle Assault",
        description:
          "3D platformer game developed with Unreal Engine 5. Navigate challenging obstacle courses with moving and rotating platforms to reach the final castle destination.",
        technologies: ["Unreal Engine", "C++"],
        githubUrl: "https://github.com/gcanidemir/ObstacleAssault",
        liveUrl: "https://www.youtube.com/watch?v=Nf8BoGlU3ek",
        imageUrl: "Obstacle_Assault.jpg"
      },
      {
        title: "Warehouse Wreckage",
        description:
          "First game built with Unreal Engine 5. Entry point to learn Unreal Engine 5. It features a simple 3D environment with basic player movement and interaction mechanics.",
        technologies: ["Unreal Engine"],
        githubUrl: "https://github.com/gcanidemir/WarehouseWreckage",
        liveUrl: "https://www.youtube.com/watch?v=Tijtn4NGrGI",
        imageUrl: "Warehouse_Wreckage.jpg"
      },
      {
        title: "Project 5",
        description:
          "Simple Unity game where you click boxes to score points, building core skills in mouse input, UI feedback, and game mechanics implementation.",
        technologies: ["Unity", "C#"],
        githubUrl: "https://github.com/gcanidemir/Project_5_Create_with_Code",
        liveUrl: "https://www.youtube.com/watch?v=tYJMgKK0eQ0",
        imageUrl: "Project_5.jpg"
      },
      {
        title: "Project 4",
        description:
          "Unity-based game developed through Create with Code, featuring interactive mechanics, simple controls, and showcasing fundamental game development skills using Unity engine.",
        technologies: ["Unity", "C#"],
        githubUrl: "https://github.com/gcanidemir/Project_4_Create_with_Code",
        liveUrl: "https://www.youtube.com/watch?v=SNf1sCkL9ww",
        imageUrl: "Project_4.jpg"
      },
      {
        title: "Project 3",
        description:
          "Unity Create with Code project that challenges players to navigate a cube through an obstacle course, avoiding hazards and reaching the finish line",
        technologies: ["Unity", "C#"],
        githubUrl: "https://github.com/gcanidemir/Project_3_Create_with_Code",
        liveUrl: "https://www.youtube.com/watch?v=DlnMhqFP2Hw",
        imageUrl: "Project_3.jpg"
      },
      {
        title: "Project 2",
        description:
          "Unity game developed as part of the Unity Learn Create with Code course, involves feeding animals with cookies.",
        technologies: ["Unity", "C#"],
        githubUrl: "https://github.com/gcanidemir/Project_2_Create_with_Code",
        liveUrl: "https://www.youtube.com/watch?v=3thyMnVTpyc",
        imageUrl: "Project_2.jpg"
      },
      {
        title: "Project 1",
        description:
          "Unity Create with Code project that introduces basic game development concepts.",
        technologies: ["Unity", "C#"],
        githubUrl: "https://github.com/gcanidemir/Project_1_Create_with_Code",
        liveUrl: "https://www.youtube.com/watch?v=zIU3mG1GZ2I",
        imageUrl: "Project_1.jpg"
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
