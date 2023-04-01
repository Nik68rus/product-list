import { clsx } from 'clsx';

import Footer from '../footer/Footer';
import Header from '../header/Header';

import styles from './Layout.module.css';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className }: Props) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
