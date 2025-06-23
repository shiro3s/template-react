import type { UseFormRegisterReturn } from "react-hook-form";

import styles from "./style.module.css"

type Props = Partial<HTMLInputElement> & {
	register?: UseFormRegisterReturn;
};

export const InputText: React.FC<Props> = ({
	disabled,
	id,
	maxLength,
	minLength,
	readOnly,
	autofocus,
	autocomplete,
	placeholder,
	tabIndex,
	register,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.containerInner}>
				<input
					className={styles.input}
					type="text"
					id={id}
					readOnly={readOnly}
					disabled={disabled}
					minLength={minLength}
					maxLength={maxLength}
					autoFocus={autofocus}
					autoComplete={autocomplete || "off"}
					placeholder={placeholder}
					tabIndex={tabIndex}
					{...register}
				/>
			</div>
		</div>
	);
};
