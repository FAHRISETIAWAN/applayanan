import React from "react";
import { useEffect } from "react";
import IndexReview from "../../components/Berkas/IndexReview";

const Review = () => {
  useEffect(() => {
    document.title = "Kab.Cirebon - Review";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="p-6">
      <IndexReview/>
    </div>
  );
};

export default Review;
