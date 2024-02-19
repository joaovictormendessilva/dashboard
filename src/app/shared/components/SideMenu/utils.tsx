import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import { routesType } from "./Types";

export const routes: routesType[] = [
  {
    icon: <DashboardIcon />,
    link: "/",
    name: "Dashboard",
  },
  {
    icon: <PersonIcon />,
    link: "/profile",
    name: "Profile",
  },
  {
    icon: <StackedLineChartIcon />,
    link: "/statistcs",
    name: "Statistcs",
  },
];
