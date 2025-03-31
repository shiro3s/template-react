import { useForm } from "react-hook-form";

type FormState = {
	title: string;
	content?: string;
};

export const useTodoForm = () => {
	const { register } = useForm<FormState>();

	return {
		register,
	};
};
