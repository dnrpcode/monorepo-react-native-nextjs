import Image from "next/image";
import styles from "./page.module.css";
import { shared } from "@monorepo/shared";

export default function Home() {
  return <main className={styles.main}>{shared}</main>;
}
