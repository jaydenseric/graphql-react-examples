import { Heading } from 'device-agnostic-ui';
import styles from './ErrorMessage.module.css';

export const ErrorMessage = ({ heading, children }) => (
  <aside className={styles.aside}>
    <Heading>{heading}</Heading>
    {children}
  </aside>
);
