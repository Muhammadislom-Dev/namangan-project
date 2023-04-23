import { Route, Routes } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Footer from "./components/organisms/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Root />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
