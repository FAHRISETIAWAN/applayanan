import React from "react";
import { useEffect } from "react";
import ProfilPage from "../../components/Profil/IndexProfil";

const Profil = () => {
  useEffect(() => {
    document.title = "Kab.Cirebon - Profil";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="p-6">
      <ProfilPage/>
    </div>
  );
};

export default Profil;
