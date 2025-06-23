import { InputText } from "@/components/common/input-text";
import { Textarea } from "@/components/common/textarea";

import { Btn } from "@/components/common/btn";
import { type FormState, useMemoForm } from "./useMemoForm";

import styles from "./style.module.css"

type Props = {
	title: string;
	submitText: string;
	defaultValues?: FormState;
	submit: (memo: FormState) => void;
	remove?: () => void;
};

export const MemoForm: React.FC<Props> = ({
	title,
	submitText,
	defaultValues,
	submit,
	remove,
}) => {
	const { register, handleSubmit, isSubmitting, errors } =
		useMemoForm(defaultValues);

	return (
		<form onSubmit={handleSubmit(submit)} className={styles.container}>
			<div className={styles.title}>{title}</div>

			<div className={styles.field}>
				<InputText placeholder="Title" register={register("title")} />
				{!!errors.title && <div className={styles.error}>{errors.title.message}</div>}
			</div>

			<div className={styles.field}>
				<Textarea placeholder="Content" register={register("content")} />
			</div>

			<div className={styles.action}>
				<div className={styles.btnGroup}>
					{!!remove && (
						<Btn
							type="button"
							disabled={isSubmitting}
							theme="danger"
							onClick={remove}
						>
							Delete
						</Btn>
					)}
					<Btn type="submit" disabled={isSubmitting}>
						{submitText}
					</Btn>
				</div>
			</div>
		</form>
	);
};
