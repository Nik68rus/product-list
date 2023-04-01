import { createElement } from 'react';
import clsx from 'clsx';

import styles from './Container.module.css';

interface Props {
  children: React.ReactNode;
  htmlTag?: 'div' | 'section' | 'article';
  className?: string;
}

const Container = ({ className = '', htmlTag = 'div', children }: Props) => {
  return createElement(
    htmlTag ?? 'div',
    {
      className: clsx(styles.container, className),
    },
    children
  );
};

export default Container;
