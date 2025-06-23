import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";

import { store } from "@/store";
import { AppRoutes } from "./Routes";

import styles from "./style.module.css"

export const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className={styles.layout}>
					<AppRoutes />
				</div>
			</BrowserRouter>
		</Provider>
	);
};
