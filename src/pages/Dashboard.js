import React from 'react';
import { SideBar } from '../components/SideBar';
import { DashboardMain } from '../components/DashboardMain';

export const Dashboard = () => {
  return (
    <div className="flex overflow-y-hidden h-screen font-manrope">
      <SideBar />
      <DashboardMain />
    </div>
  );
}
