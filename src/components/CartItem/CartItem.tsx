import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, minusItem, removeFromCart } from '../../redux/cart/slice';
import styles from './CartItem.module.scss';

type CartItemProps = {
  id: number;
  img: string;
  name: string;
  price: number;
  quantity: number;
};

const CartItem: React.FC<CartItemProps> = ({
  id,
  img,
  name,
  price,
  quantity,
}) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addToCart({ id, img, name, price, quantity: 1 }));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <li className={styles.cartItem}>
      <img src={img} alt="item" className={styles.cartImg} />
      <div className={styles.cartItemInfo}>
        <h3 className={styles.cartItemName}>{name}</h3>
        <p className={styles.cartItemPrice}>£{price}</p>
      </div>
      <div className={styles.cartItemActions}>
        <button onClick={onClickPlus} className={styles.button}>
          +
        </button>
        <p className={styles.cartItemQuantity}> {quantity}</p>
        <button
          onClick={onClickMinus}
          className={styles.button}
          disabled={!quantity}
        >
          -
        </button>
      </div>
      <div className={styles.total}>{price * quantity}£</div>
      <div>
        <button className={styles.button} onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  );
};

export default CartItem;
