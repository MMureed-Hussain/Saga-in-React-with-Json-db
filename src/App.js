import "./App.css";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/pages/Main/Cart";
import Dashboard from "./components/pages/Dashboard";
import Header from "./components/pages/Main/Header";
import Front from "./components/pages/Main/Front";
import Hooks from "./components/pages/Main/Hooks";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/front" element={<Front />}/>
        <Route path="/hooks" element={<Hooks />}/>
      </Routes>
    </>
  );
}

export default App;
