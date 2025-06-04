import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <Projects />
    </div>
  );
};

export default App;
