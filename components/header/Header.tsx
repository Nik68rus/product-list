import Link from 'next/link';
import Container from '../container/Container';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Link href="/" className={styles.logo}>
          Список товаров
        </Link>
      </Container>
    </header>
  );
};

export default Header;
