import { MemoCard } from "@/components/feature/memo-card";
import { useAppSelector } from "@/libs/redux";

import styles from "./style.module.css"

export const Contents = () => {
  const memos = useAppSelector((state) => state.memo.memos);

  if (memos.length === 0) {
    return (
      <div className={styles.container}>
        <h2 className={styles.head}>No items</h2>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {memos.map((memo) => (
        <MemoCard
          id={memo.id}
          title={memo.title}
          content={memo.content}
          key={memo.id}
        />
      ))}
    </div>
  );
};
