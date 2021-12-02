import styles from "./Header.module.css";

export function Header(props) {
  return <header {...props} className={styles.header} />;
}
