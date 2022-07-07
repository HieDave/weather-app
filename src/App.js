import HeroSection from "./components/heroSection";
import SideBar from "./components/sideBar";


function App() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <HeroSection />
      <SideBar />
    </div>
  );
}

export default App;
