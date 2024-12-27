import { ClipboardList, MessageSquare, PieChart } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Application",
    path: "/",
    icon: MessageSquare,
  },
  {
    title: "Criteria for evaluation",
    path: "/criteria",
    icon: ClipboardList,
  },
  {
    title: "Evaluation results",
    path: "/results",
    icon: PieChart,
  },
];

const AppSidebar = () => {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="flex flex-col items-start space-y-1 mb-4">
              <span className="text-2xl font-bold text-yc-orange">Application Assistant</span>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yc-orange to-orange-500">YC</span>
                <span className="text-lg text-muted-foreground">by Lyzr</span>
              </div>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                        location.pathname === item.path
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;