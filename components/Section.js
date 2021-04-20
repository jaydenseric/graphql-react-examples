import styles from './Section.module.css';

export function Section(props) {
  return <section {...props} className={styles.section} />;
}
