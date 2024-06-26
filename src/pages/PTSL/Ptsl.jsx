import React from "react";
import { useEffect } from "react";
import PtslPage from "../../components/PTSL/IndexPTSL";

const Ptsl = () => {
  useEffect(() => {
    document.title = "Kab.Cirebon - PTSL";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="p-6">
      <PtslPage/>
    </div>
  );
};

export default Ptsl;
