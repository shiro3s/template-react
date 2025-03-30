import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";

import { store } from "@/store";
import { AppRoutes } from "./Routes";

export const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</Provider>
	);
};
