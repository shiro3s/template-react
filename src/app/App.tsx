import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { styled } from "@kuma-ui/core";

import { store } from "@/store";
import { AppRoutes } from "./Routes";

export const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Layout>
					<AppRoutes />
				</Layout>
			</BrowserRouter>
		</Provider>
	);
};

const Layout = styled.div`
	margin: 0 auto;
	max-width: 1280px;
	box-sizing: border-box;
	padding: 2rem 1.5rem;
`;
