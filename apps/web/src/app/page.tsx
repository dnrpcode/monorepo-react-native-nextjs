"use client";
import styles from "./page.module.css";
import { shared, useCounterStore } from "@monorepo/shared";

export default function Home() {
  const { count, decrement } = useCounterStore();
  return (
    <main className={styles.main}>
      {shared}, Count form zuntand share {count}
    </main>
  );
}
