import clsx from 'clsx';
import { Roboto_Mono } from 'next/font/google';
import Link from 'next/link';

import { Size, Variant } from '@/types';

import styles from './Button.module.css';

const roboto = Roboto_Mono({ subsets: ['latin', 'cyrillic'] });

interface Props {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  type?: 'button' | 'reset' | 'submit';
  className?: string;
  inline?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button = ({
  children,
  variant,
  size,
  href,
  type,
  inline,
  onClick,
  className,
  disabled,
}: Props) => {
  const classes = clsx(
    styles.btn,
    variant && styles[`btn--${variant}`],
    size && styles[`btn--${size}`],
    inline && styles[`btn--inline`],
    className,
    roboto.className
  );
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  } else {
    return (
      <button
        type={type || 'button'}
        className={classes}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
};

export default Button;
