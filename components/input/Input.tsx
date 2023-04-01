import clsx from 'clsx';
import styles from './Input.module.css';

interface Props {
  label?: string;
  type: 'text' | 'number';
  id: string;
  name?: string;
  value?: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

function Input({
  label,
  type,
  id,
  name,
  value,
  onChange,
  placeholder,
  disabled,
  className,
}: Props) {
  return (
    <div className={clsx(styles.input, className)}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        id={id}
        name={name || id}
        value={value}
        onChange={onChange}
        placeholder={placeholder ? placeholder : ''}
        disabled={disabled ? true : false}
      />
    </div>
  );
}

export default Input;
