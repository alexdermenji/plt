import React from 'react';
import styles from './Cart.module.scss';
import { BsCartDash } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import { removeAllItems } from '../../redux/cart/slice';
import { selectCartItems } from '../../redux/cart/selectors';

const Cart: React.FC = () => {
  const items = useSelector(selectCartItems);
  const totalAmount = items.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0
  );
  const dispatch = useDispatch();
  const onClickRemoveAll = () => {
    dispatch(removeAllItems());
  };
  return (
    <div className={styles.container}>
      <div className={styles.cartHeader}>
        <div className={styles.title}>
          <BsCartDash />
          <h2 className={styles.cartTitle}>Shopping Cart</h2>
        </div>
        <div className={styles.remove}>
          <button className={styles.button} onClick={onClickRemoveAll}>
            Remove all items
          </button>
        </div>
      </div>
      <ul className={styles.cartItems}>
        {items.map((item: any) => (
          <CartItem key={item.id} {...item} />
        ))}
      </ul>
      <div className={styles.cartFooter}>
        <div className={styles.cartCheckout}>
          <button className={styles.checkoutButton}>Checkout</button>
        </div>
        <div className={styles.cartTotal}>
          <p className={styles.cartTotalPrice}>
            Total: £{totalAmount.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
