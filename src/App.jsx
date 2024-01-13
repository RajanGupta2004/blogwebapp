import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import { useState } from "react";
import Postliststore from "./store/Post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <Postliststore>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="app-content">
          <Header />
          <Outlet />

          <Footer />
        </div>
      </div>
    </Postliststore>
  );
}

export default App;
