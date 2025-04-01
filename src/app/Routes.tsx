import { Route, Routes } from "react-router";

import { EditMemo } from "@/pages/memos/edit";
import { MemoLists } from "@/pages/memos/lists";
import { CreateMemo } from "@/pages/memos/new";
import { NotFound } from "@/pages/not-found";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" Component={MemoLists} />
			<Route path="/new" Component={CreateMemo} />
			<Route path="/edit/:id" Component={EditMemo} />
			<Route path="*" Component={NotFound} />
		</Routes>
	);
};
