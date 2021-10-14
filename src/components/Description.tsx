import React from 'react';
import styles from '../../styles/Home.module.css';

type Props = {
  filename: string;
};

const Description: React.VFC<Props> = ({ filename }) => (
  <p className={styles.description}>
    Get started by editing <code className={styles.code}>{filename}</code>
  </p>
);

export default Description;
