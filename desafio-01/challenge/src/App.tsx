import Header from "./components/header";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#03052B]">
      <Header />

      <main
        id="inicio"
        className="min-h-screen bg-[url('/background.png')] 
        bg-cover bg-center bg-no-repeat"
      ></main>
    </div>
  );
}

export default App;
