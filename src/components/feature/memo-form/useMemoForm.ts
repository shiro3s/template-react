import { useForm } from "react-hook-form";

type FormState = {
	title: string;
	content?: string;
};

export const useMemoForm = () => {
	const { register, handleSubmit } = useForm<FormState>();

	return {
		register,
		handleSubmit
	};
};
