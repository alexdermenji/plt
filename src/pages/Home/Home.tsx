import React from 'react';
import styles from './Home.module.scss';
import { useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../redux/store';
import { selectProducts } from '../../redux/products/selectors';
import { fetchProducts } from '../../redux/products/asyncActions';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading')
    return <div className={styles.status}>Loading...</div>;

  if (status === 'error') return <div className={styles.status}>Error...</div>;

  return (
    <div className={styles.container}>
      <ul className={styles.cards}>
        {items.map((item: any) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
