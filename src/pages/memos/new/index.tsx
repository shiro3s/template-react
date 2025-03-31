import {styled} from "@kuma-ui/core"
import { InputText } from "@/components/common/input-text";
import {useTodoForm} from "./useTodoForm"

import {MemoForm} from "@/components/feature/memo-form"

export const CreateMemo = () => {
	const {register} = useTodoForm()

	return (
		<MemoForm title="Create a new memo" />
	);
};

const Form = styled.form`
`;