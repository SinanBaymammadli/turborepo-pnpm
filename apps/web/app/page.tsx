import styles from "./page.module.css";
import { Button } from "@repo/ui/button";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <h1>Hello world!</h1>

      <Button appName="web" className={styles.button}>
        Click here!
      </Button>
    </main>
  );
}
