import { IProduct } from '@/types';

import Container from '../container/Container';
import Title from '../title/Title';
import ProductItem from '../product-item/ProductItem';
import Pagination from '../pagination/Pagination';

import styles from './ProductList.module.css';

interface Props {
  title?: string;
  items: IProduct[];
}

const ProductList = ({ title, items }: Props) => {
  return (
    <Container htmlTag="section">
      {title && (
        <Title level={2} className={styles.title}>
          {title}
        </Title>
      )}
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <ProductItem item={item} />
          </li>
        ))}
      </ul>
      <Pagination total={9} />
    </Container>
  );
};

export default ProductList;
