import React, { useState } from 'react';
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Routes from "./routes/Routes";
import { Toaster } from "react-hot-toast";

const App = ({ handleLogout }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div className="flex flex-row h-screen">
     <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <div className="flex flex-col flex-1 w-full">
      <Header handleLogout={handleLogout} handleDrawerToggle={handleDrawerToggle}  />
        <main className="h-full overflow-y-auto bg-background">
          <div className="container mt-12 grid mx-auto">
            <Routes />
          </div>
        </main>
      </div>
      <Toaster />
    </div>
  );
};

export default App;
