import EmployerSidebar from "@/components/layout/EmployerSidebar";
// import EmployerHeader from "@/components/layout/EmployerHeader";

// This layout only wraps routes inside the /employer directory
export default function EmployerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md flex">
      {/* Sidebar is a Client Component because it needs active route highlighting */}
      <EmployerSidebar />
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* <EmployerHeader /> */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8 w-full ml-0 md:ml-[280px] md:w-[calc(100%-280px)]">
          <div className="max-w-7xl mx-auto h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}