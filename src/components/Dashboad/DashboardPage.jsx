import React, { useState, useEffect } from 'react';
import ChartCard from "../shared/ChartCard";
import PageTitle from "../shared/PageTitle";



const DashboardPage = () => {
    

  return (
<div className="grid gap-6 mt-5 mb-6 grid-cols-1 xl:grid-cols-1">
    <PageTitle>Dashboard</PageTitle>
    <div className="grid gap-6 mt-5 mb-6 grid-cols-2 xl:grid-cols-2">
    <ChartCard>
      
    </ChartCard>
    <ChartCard>
      
    </ChartCard>
    </div>
    <div className="grid gap-6 mt-5 mb-6 grid-cols-2 xl:grid-cols-1">
    <ChartCard>
      
      </ChartCard>
    </div>
</div>

  );
}
export default DashboardPage;