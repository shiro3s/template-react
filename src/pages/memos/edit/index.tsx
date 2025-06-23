import { MemoForm } from "@/components/feature/memo-form";
import { useEditPage } from "./useEditPage";

import styles from "./style.module.css"

export const EditMemo = () => {
	const { memo, handleSubmit, handleDelete } = useEditPage();

	if (!memo) {
		return (
			<div className={styles.empty}>
				<h2 className={styles.text}>Not Found</h2>
			</div>
		);
	}

	return (
		<MemoForm
			title="Edit memo"
			submitText="Save changed"
			defaultValues={memo}
			submit={handleSubmit}
			remove={handleDelete}
		/>
	);
};
