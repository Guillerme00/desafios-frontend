import Header from "./components/header";
import Hero from "./components/hero";
import LogoBar from "./components/logo_bar";
import Pricing from "./components/pricing";
import Solutions from "./components/solutions";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#03052B]">
      <Header />
      <Hero />
      <LogoBar />
      <Solutions />
      <Pricing />
    </div>
  );
}

export default App;
