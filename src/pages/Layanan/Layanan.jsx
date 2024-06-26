import React from "react";
import { useEffect } from "react";
import LayananPage from "../../components/Layanan/IndexLayanan.jsx";

const Layanan = () => {
  useEffect(() => {
    document.title = "Kab.Cirebon - Layanan";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="p-6">
      <LayananPage/>
    </div>
  );
};

export default Layanan;
