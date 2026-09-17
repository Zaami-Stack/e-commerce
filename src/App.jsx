import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Categoty from "./components/Category";

function App() {
  return (
    <div className="app min-h-screen w-full bg-white">
      <Header />
      <main className="w-full overflow-x-hidden pt-12">
        <Banner />
        <Categoty />
      </main>
    </div>
  );
}

export default App;