import React from "react";
import { useEffect } from "react";
import Permohonan from "../../components/Layanan/PermohonanBlokir";

const FormulirBlokir = () => {
  useEffect(() => {
    document.title = "Kab.Cirebon - Formulir Blokir";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="p-6">
      <Permohonan/>
    </div>
  );
};

export default FormulirBlokir;
