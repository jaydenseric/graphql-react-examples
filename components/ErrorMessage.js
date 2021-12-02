import Heading from 'device-agnostic-ui/Heading.mjs';
import styles from './ErrorMessage.module.css';

export function ErrorMessage({ heading, children }) {
  return (
    <aside className={styles.aside}>
      <Heading>{heading}</Heading>
      {children}
    </aside>
  );
}
