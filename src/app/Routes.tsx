import { Routes, Route } from "react-router";

import { MemoLists } from "@/pages/memos/lists";
import { CreateMemo } from "@/pages/memos/new";
import { EditMemo } from "@/pages/memos/edit";
import { DetailMemo } from "@/pages/memos/detail";
import { NotFound } from "@/pages/not-found";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" Component={MemoLists} />
			<Route path="/new" Component={CreateMemo} />
			<Route path="/edit/:id" Component={EditMemo} />
			<Route path="/:id" Component={DetailMemo} />
			<Route path="*" Component={NotFound} />
		</Routes>
	);
};
