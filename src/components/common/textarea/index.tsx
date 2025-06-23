import type { UseFormRegisterReturn } from "react-hook-form";

import styles from "./style.module.css"

type Props = Partial<HTMLTextAreaElement> & {
	register?: UseFormRegisterReturn;
};

export const Textarea: React.FC<Props> = ({
	placeholder,
	autocomplete,
	disabled,
	readOnly,
	maxLength,
	minLength,
	register,
}) => {
	return (
		<div className={styles.container}>
			<textarea
				className={styles.input}
				disabled={disabled}
				readOnly={readOnly}
				maxLength={maxLength}
				minLength={minLength}
				placeholder={placeholder}
				autoComplete={autocomplete || "off"}
				{...register}
			/>
		</div>
	);
};
