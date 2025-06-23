import { Link } from "react-router";

import styles from "./style.module.css"

export const MemoCard: React.FC<Memo> = ({ id, title, content }) => {
	return (
		<div className={styles.container}>
			<Link to={`/edit/${id}`} className={styles.anchor} />

			<div className={styles.header}>
				<h2 className={styles.title}>{title}</h2>
			</div>

			<div className={styles.body}>{content}</div>
		</div>
	);
};
