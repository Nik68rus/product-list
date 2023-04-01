import clsx from 'clsx';
import { BadgeType } from '@/types';
import styles from './Badge.module.css';

interface Props {
  type: BadgeType;
  className?: string;
  animated?: boolean;
}

const Badge = ({ type, className, animated }: Props) => {
  return (
    <span
      className={clsx(
        styles.badge,
        styles[`${type}`],
        animated && styles.animated,
        className
      )}
    >
      {type}
    </span>
  );
};

export default Badge;
