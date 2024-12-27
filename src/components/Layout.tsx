import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col w-full">
        <header className="h-16 border-b flex items-center px-6 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yc-orange to-orange-500">YC</span>
            <span className="text-xl font-semibold">application assistant</span>
            <span className="text-lg text-muted-foreground">by Lyzr</span>
          </div>
        </header>
        <div className="flex flex-1 overflow-hidden">
          <AppSidebar />
          <main className="flex-1 overflow-hidden">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;