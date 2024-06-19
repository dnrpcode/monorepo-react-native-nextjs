"use client";
import styles from "./page.module.css";
import { shared, useCounterStore } from "@monorepo/shared";

export default function Home() {
  const { count, decrement, increment } = useCounterStore();
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>{shared}</h1>
        <p>Count from Zustand: {count}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={decrement}>
          Decrement
        </button>
        <button className={styles.button} onClick={increment}>
          Increment
        </button>
      </div>
    </main>
  );
}
