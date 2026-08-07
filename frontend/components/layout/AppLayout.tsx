"use client";

import Sidebar from "../navigation/Sidebar";
import TopNavbar from "../navigation/TopNavbar";

interface AppLayoutProps {
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
  children: React.ReactNode;
}

export default function AppLayout({
  activeScreen,
  setActiveScreen,
  children,
}: AppLayoutProps) {
  return (
    <div className="flex h-screen w-screen bg-[#030814]">

      <Sidebar
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
      />

      <div className="flex flex-1 flex-col overflow-hidden">

        <TopNavbar />

        <main className="flex-1 overflow-auto bg-[#030814] px-8 py-6">

          {children}

        </main>

      </div>

    </div>
  );
} 