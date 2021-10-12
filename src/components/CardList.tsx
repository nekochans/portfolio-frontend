import React from 'react';
import Card from './Card';
import styles from '../../styles/Home.module.css';

type Props = {
  items: {
    id: number;
    title: string;
    url: string;
    description: string;
  }[];
};

const CardList: React.VFC<Props> = ({ items }) => (
  <div className={styles.grid}>
    {items.map((item) => (
      <Card
        key={item.id}
        title={item.title}
        url={item.url}
        description={item.description}
      />
    ))}
  </div>
);

export default CardList;
