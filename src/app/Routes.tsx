import { Routes, Route } from "react-router";
import { TodoLists } from "@/pages/todos/lists";
import { NotFound } from "@/pages/not-found";
import { CreateTodo } from "@/pages/todos/new";
import { EditTodo } from "@/pages/todos/edit";
import { DetailTodo } from "@/pages/todos/detail";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" Component={TodoLists} />
			<Route path="/new" Component={CreateTodo} />
			<Route path="/edit/:id" Component={EditTodo} />
			<Route path="/:id" Component={DetailTodo} />
			<Route path="*" Component={NotFound} />
		</Routes>
	);
};
