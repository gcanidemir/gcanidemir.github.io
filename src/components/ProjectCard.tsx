import { ExternalLink, Github, Terminal } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <div className="bg-black border border-green-400 rounded overflow-hidden hover:border-green-300 transition-all duration-300 group relative">
      {/* Header */}
      <div className="h-48 bg-gradient-to-br from-green-900/50 to-black relative overflow-hidden border-b border-green-400">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Terminal className="text-green-400" size={48} />
          </div>
        )}
        {imageUrl ? null : (
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 bg-black">
        <h3 className="text-xl font-mono font-bold text-green-400 mb-3">
          {title}
        </h3>
        <p className="text-green-300 mb-4 leading-relaxed font-mono text-sm">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="text-green-500 font-mono text-xs mb-2">
            TECH_STACK:
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-black border border-green-400 text-green-400 font-mono text-xs"
              >
                [{tech}]
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex space-x-4 pt-4 border-t border-green-400/30">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-400 hover:text-green-300 transition-colors duration-300 font-mono text-sm border border-green-400 px-3 py-1 hover:bg-green-400/10"
            >
              <Github size={16} className="mr-2" />
              SOURCE
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-400 hover:text-green-300 transition-colors duration-300 font-mono text-sm border border-green-400 px-3 py-1 hover:bg-green-400/10"
            >
              <ExternalLink size={16} className="mr-2" />
              DEMO
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
