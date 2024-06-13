"use client";
import styles from "./page.module.css";
import { shared, useCounterStore, Button } from "@monorepo/shared";

export default function Home() {
  const { count, decrement, increment } = useCounterStore();
  return (
    <main className={styles.main}>
      {shared}, Count form zuntand share {count}
      <button onClick={decrement}>decrement</button>
      <button onClick={increment}>increment</button>
      <Button>Shared Component</Button>
    </main>
  );
}
