import React from "react";
import { useEffect } from "react";
import IndexHistory from "../../components/Berkas/IndexHistory";

const History = () => {
  useEffect(() => {
    document.title = "Kab.Cirebon - History";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="p-6">
      <IndexHistory/>
    </div>
  );
};

export default History;
