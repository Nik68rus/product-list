import { createElement, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Title.module.css';

interface Props {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: ReactNode;
}

const Title = ({ level, className, children }: Props) => {
  const tag = level ? `h${level}` : 'h1';
  return createElement(
    tag,
    { className: clsx(styles.title, className) },
    children
  );
};

export default Title;
