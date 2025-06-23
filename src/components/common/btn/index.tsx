import styles from "./style.module.css"

type Props = Partial<Omit<HTMLButtonElement, "children">> & {
	children: string;
	theme?: "danger";
	onClick?: () => void;
};

export const Btn: React.FC<Props> = ({
	type = "button",
	disabled,
	children,
	theme,
	onClick,
}) => {
	return (
		<button
			type={type}
			disabled={disabled}
			data-theme={theme}
			onClick={onClick}
      className={styles.button}
		>
			{children}
		</button>
	);
};
