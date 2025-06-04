import { Terminal } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-green-400 font-mono relative overflow-hidden">
      <div className="relative z-10 bg-black border border-green-400 rounded-xl shadow-lg px-10 py-12 flex flex-col items-center">
        <div className="mb-6 flex items-center justify-center">
          <Terminal size={48} className="text-green-400 mr-3" />
          <span className="text-6xl font-bold animate-matrix-glitch drop-shadow-[0_0_10px_#00ff41] select-none">
            404
          </span>
        </div>
        <p className="text-xl md:text-2xl text-green-300 mb-8 animate-pulse text-center">
          The Matrix cannot find this page.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-black border border-green-400 text-green-400 font-mono rounded-lg shadow-lg hover:bg-green-400/10 hover:text-green-300 transition-colors duration-200 text-lg"
        >
          Return to the Matrix
        </a>
      </div>
    </div>
  );
};

export default NotFound;
