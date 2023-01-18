import { createBrowserRouter } from "react-router-dom"

import Home from "../pages/home"
import Dashboard from "../pages/dashboard/dashboard"
import NotFound from "../pages/404"
import RequireAuth from "components/wrappers/requireAuth"
import Index from "pages/index"
import DashboardScreen from "pages/dashboard/dashboardScreen/dashboardScreen"
import Schedule from "pages/dashboard/schedule"
import Courses from "pages/dashboard/courses"
import Gradebook from "pages/dashboard/gradebook"
import Performance from "pages/dashboard/performance"
import Announcement from "pages/dashboard/announcement"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Index />,
	},
	{
		path: "/home",
		element: (
			<RequireAuth isAuthRequired={false}>
				<Home />
			</RequireAuth>
		),
	},
	{
		path: "/dashboard",
		element: (
			<RequireAuth>
				<Dashboard />
			</RequireAuth>
		),
		children: [
			{
				path: "",
				element: <DashboardScreen />,
			},
			{
				path: "schedule",
				element: <Schedule />,
			},
			{
				path: "courses",
				element: <Courses />,
			},
			{
				path: "gradebook",
				element: <Gradebook />,
			},
			{
				path: "performance",
				element: <Performance />,
			},
			{
				path: "announcement",
				element: <Announcement />,
			},
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
])
