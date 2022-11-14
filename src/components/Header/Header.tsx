import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { BsCartDash } from 'react-icons/bs';
import Categories from '../Categories/Categories';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/cart/selectors';

const Header: React.FC = () => {
  const { items } = useSelector(selectCart);
  const totalQuantity = items.reduce(
    (acc: number, item: any) => acc + item.quantity,
    0
  );
  const totalAmount = items.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className={styles.header}>
      <div>
        <Link className={styles.link} to="/">
          PRETTYLITTLETHING
        </Link>
      </div>
      <Categories />
      <Link className={styles.link} to="/cart">
        <div className={styles.headerCart}>
          {totalQuantity}
          <BsCartDash className={styles.cartIcon} />
          <div className={styles.cartTotal}>| £{totalAmount.toFixed(2)}</div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
