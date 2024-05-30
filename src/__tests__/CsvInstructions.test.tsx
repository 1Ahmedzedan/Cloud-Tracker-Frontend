import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserProvider from "../context/UserProvider";
import CsvInstructions from "../pages/Dashboard/CsvInstructions";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
		},
	},
});

describe("cloud formation", () => {
	beforeEach(() => {
		render(
			<HashRouter>
				<UserProvider>
					<QueryClientProvider client={queryClient}>
						<CsvInstructions />
					</QueryClientProvider>
				</UserProvider>
			</HashRouter>,
		);
	});

	it("should have Step 1", () => {
		const step1 = screen.getByText(/Step 1: Access Cost Explorer/i);
		expect(step1).toBeInTheDocument();
	});

	it("should have Step 2", () => {
		const step2 = screen.getByText(/Step 2: Set Up Your Query/i);
		expect(step2).toBeInTheDocument();
	});

	it("should have Step 3", () => {
		const step3 = screen.getByText(/Step 3: Download the Report/i);
		expect(step3).toBeInTheDocument();
	});
});
