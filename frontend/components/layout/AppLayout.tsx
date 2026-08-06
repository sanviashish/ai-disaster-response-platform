import Sidebar from "../navigation/Sidebar";
import TopNavbar from "../navigation/TopNavbar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-screen w-screen bg-[#07111F]">

      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">

        <TopNavbar />

        <main className="flex-1 overflow-auto p-8">

          {children}

        </main>

      </div>

    </div>
  );
}