import { useState } from 'react';
import Button from '../button/Button';
import Input from '../input/Input';
import styles from './Pagination.module.css';
import { useRouter } from 'next/router';

interface Props {
  total: number;
}

const Pagination = ({ total }: Props) => {
  const router = useRouter();
  const page = (router.query.page as string) || 1;
  const [currentPage, setCurrentPage] = useState(+page);

  const inputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setCurrentPage(+e.target.value <= total ? +e.target.value : total);
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    router.push({ query: { page: currentPage } });
  };

  const nextHandler = () => {
    router.push({ query: { page: currentPage + 1 } });
    setCurrentPage((prev) => prev + 1);
  };

  const prevHandler = () => {
    router.push({ query: { page: currentPage - 1 } });
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className={styles.pagination}>
      <Button
        inline={true}
        onClick={prevHandler}
        disabled={currentPage === 1}
      >{`<`}</Button>
      <form onSubmit={submitHandler}>
        <Input
          type="number"
          id="page"
          label="Страница"
          value={currentPage || ''}
          className={styles.input}
          onChange={inputChangeHandler}
        />
      </form>
      <Button
        inline={true}
        onClick={nextHandler}
        disabled={currentPage === total}
      >{`>`}</Button>
    </div>
  );
};

export default Pagination;
