import {
  Github,
  Linkedin,
  Code2,
  Brain,
  Gamepad2,
  Terminal,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 min-h-screen flex items-center justify-center bg-black text-green-400 relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="w-32 h-32 mx-auto mb-8 border-2 border-green-400 rounded-lg bg-black flex items-center justify-center relative">
            <Terminal size={48} className="text-green-400" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 text-green-400 relative">
            <span className="relative inline-block">SOFTWARE ENGINEER</span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-mono mb-4 text-green-300">
            Jack of All Trades. Master of Some.
          </h2>

          {/* Description */}
          <div className="max-w-2xl mx-auto mb-12 text-green-300 leading-relaxed font-mono text-sm">
            <p className="mb-4 bg-black border-l-4 border-green-400 pl-4 py-2">
              Passionate software engineer with expertise in full-stack
              development, AI integration, and game development. Specializing in
              transforming complex algorithms into elegant, user-friendly
              solutions.
            </p>
            <p className="bg-black border-l-4 border-green-400 pl-4 py-2">
              When not coding, exploring cutting-edge technologies, and pushing
              the boundaries of digital innovation.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center bg-black border border-green-400 rounded px-4 py-2 font-mono">
              <Code2 className="mr-2 text-green-400" size={16} />
              <span className="text-green-300">FULL-STACK</span>
            </div>
            <div className="flex items-center bg-black border border-green-400 rounded px-4 py-2 font-mono">
              <Brain className="mr-2 text-green-400" size={16} />
              <span className="text-green-300">AI/ML</span>
            </div>
            <div className="flex items-center bg-black border border-green-400 rounded px-4 py-2 font-mono">
              <Gamepad2 className="mr-2 text-green-400" size={16} />
              <span className="text-green-300">GAME DEV</span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/gcanidemir"
              className="text-green-400 hover:text-green-300 transition-colors duration-300 hover:scale-110 transform border border-green-400 rounded p-3 bg-black hover:bg-green-400/10 relative z-50 focus:z-50 hover:z-50"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/gcanidemir/"
              className="text-green-400 hover:text-green-300 transition-colors duration-300 hover:scale-110 transform border border-green-400 rounded p-3 bg-black hover:bg-green-400/10"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator*/}
      <div className="fixed bottom-8 right-8 z-20">
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center bg-black">
            <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <div className="text-green-400 text-xs font-mono mt-2 animate-pulse writing-mode-vertical-lr">
            SCROLL_DOWN
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
