import { AnchorBtn } from "@/components/common/anchor-btn";

import styles from "./style.module.css"

export const Header = () => {
  return (
    <header className={styles.container}>
      <AnchorBtn href="/new">New</AnchorBtn>
    </header>
  );
};
