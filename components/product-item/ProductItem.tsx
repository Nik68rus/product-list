import { useEffect, useState } from 'react';

import { IProduct, Variant } from '@/types';

import Image from 'next/image';
import Title from '../title/Title';
import Button from '../button/Button';
import Badge from '../badge/Badge';

import styles from './ProductItem.module.css';

interface Props {
  item: IProduct;
}

const ProductItem = ({ item }: Props) => {
  const { id, title, brand, imageUrl, badge } = item;
  const [focused, setFocused] = useState(false);

  const onFocus = () => {
    setFocused(true);
  };

  const onUnfocus = () => {
    setFocused(false);
  };

  useEffect(() => {}, []);

  return (
    <article
      className={styles.product}
      tabIndex={0}
      onMouseEnter={onFocus}
      onMouseLeave={onUnfocus}
      onFocus={onFocus}
      onBlur={onUnfocus}
    >
      <div className={styles.image}>
        <Image
          unoptimized
          src={imageUrl}
          width={200}
          height={200}
          alt={title}
        />
      </div>
      <div className={styles.info}>
        <Title level={3} className={styles.title}>
          {title}
        </Title>
        <p className={styles.brand}>{brand}</p>
      </div>
      <div className={styles.badge}>
        <Badge type={badge} animated={focused} />
      </div>
      <div className={styles.actions}>
        <Button href={`/${id}`} variant={Variant.SUCCESS}>
          Подробнее
        </Button>
      </div>
    </article>
  );
};

export default ProductItem;
