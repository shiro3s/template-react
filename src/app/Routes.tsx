import { Routes, Route } from "react-router";
import { TodoLists } from "@/pages/todos/lists";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" Component={TodoLists} />
		</Routes>
	);
};
