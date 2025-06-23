import { Link } from "react-router";

import styles from "./style.module.css"

type Props = {
	href: string;
	children: string;
	disabled?: boolean;
};

export const AnchorBtn: React.FC<Props> = ({ children, href, disabled }) => {
	return (
		<div className={styles.container}>
			<Link to={href} aria-disabled={disabled} className={styles.link}>
				{children}
			</Link>
		</div>
	);
};
