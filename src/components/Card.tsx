import React from 'react';
import styles from '../../styles/Home.module.css';

type Props = {
  title: string;
  url: string;
  description: string;
};

const Card: React.VFC<Props> = ({ title, url, description }) => (
  <a href={url} className={styles.card}>
    <h2>{title} &rarr;</h2>
    <p>{description}</p>
  </a>
);

export default Card;
