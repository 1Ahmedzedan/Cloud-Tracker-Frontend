import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import { Profile } from "./pages/Profile";
import Onboarding from "./pages/Dashboard/Onbording";
import ManualMethod from "./pages/Dashboard/ManualMethod";
import AWSCLIMethod from "./pages/Dashboard/AWSCLIMethod";
import CloudFormationMEthod from "./pages/Dashboard/CloudFormationMEthod";
import Applayout from "./ui/Applayout";
import ScrollToTop from "./ui/ScrollToTop";
import { HashRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./context/UserProvider";
import ProtectRouter from "./ui/ProtectRouter";
import AllCharts from "./ui/DashBoard/AllCharts";
import PieChart from "./Features/DashBoard/PieChart";
import ColumnChart from "./Features/DashBoard/ColumnChart";
import LineChart from "./Features/DashBoard/LineChart";
import BubbleChart from "./Features/DashBoard/BubbleChart";
import CsvInstructions from "./pages/Dashboard/CsvInstructions";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

export default function App() {
	return (
		<>
			<HashRouter>
				<UserProvider>
					<QueryClientProvider client={queryClient}>
						<ScrollToTop>
							<ProtectRouter>
								<Routes>
									<Route path="/" element={<Applayout />}>
										<Route index element={<Home />} />
										<Route path="blog" element={<Blog />} />
										<Route
											path="blog/:id"
											element={<BlogDetails />}
										/>
										<Route path="dashboard">
											<Route index element={<Onboarding />} />
											<Route
												path="instruction"
												element={<CsvInstructions />}
											/>
											<Route
												path="manual"
												element={<ManualMethod />}
											/>
											<Route
												path="terminal"
												element={<AWSCLIMethod />}
											/>
											<Route
												path="cloudFormation"
												element={<CloudFormationMEthod />}
											/>
											<Route
												path="cdk"
												element={<div>fourth</div>}
											/>
											<Route path="charts" element={<Dashboard />}>
												<Route index element={<AllCharts />} />
												<Route
													path="pieChart"
													element={<PieChart type="full" />}
												/>
												<Route
													path="columnChart"
													element={<ColumnChart type="full" />}
												/>
												<Route
													path="lineChart"
													element={<LineChart type="full" />}
												/>
												<Route
													path="bubbleChart"
													element={<BubbleChart type="full" />}
												/>
												<Route
													path="notification"
													element={<div>notification</div>}
												/>
											</Route>
										</Route>
										<Route path="profile" element={<Profile />} />
									</Route>

									<Route path="signIn" element={<SignIn />} />

									<Route path="signUp" element={<SignUp />} />

									<Route path="*" element={<NotFound />} />
								</Routes>
							</ProtectRouter>
						</ScrollToTop>
					</QueryClientProvider>
				</UserProvider>
			</HashRouter>
			<ToastContainer />
		</>
	);
}
