import React from "react";
import { useEffect } from "react";
import DashboardPage from "../../components/Dashboad/DashboardPage";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Kab.Cirebon - Dashboard";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="p-6">
      <DashboardPage/>
    </div>
  );
};

export default Dashboard;
