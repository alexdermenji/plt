import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Product.module.scss';
import { useAppDispatch } from '../../redux/store';
import { selectProduct } from '../../redux/product/selectors';
import { fetchSingleProduct } from '../../redux/product/asyncActions';

const Product: React.FC = () => {
  const { id } = useParams() as { id: string };
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  const { item, status } = useSelector(selectProduct);

  if (status === 'loading')
    return <div className={styles.status}>Loading...</div>;

  if (status === 'error') return <div className={styles.status}>Error...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <Link to="/">
          <button className={styles.backButton}>Back</button>
        </Link>
      </div>
      {<ProductCard key={item.id} {...item} />}
    </div>
  );
};

export default Product;
