import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectProductQuantity } from '../../redux/cart/selectors';
import { addToCart } from '../../redux/cart/slice';
import { CartItem } from '../../redux/cart/types';
import styles from './ProductCard.module.scss';

type ProductCardType = {
  id: number;
  price: number;
  name: string;
  img: string;
};
const ProductCard: React.FC<ProductCardType> = ({ id, price, name, img }) => {
  const dispatch = useDispatch();
  const { quantity } = useSelector(selectProductQuantity(id));

  const onAddToCart = () => {
    const item: CartItem = {
      id,
      price,
      name,
      img,
      quantity: 0,
    };
    dispatch(addToCart(item));
  };
  return (
    <li key={id} className={styles.card}>
      <Link to={`/product/${id}`} className={styles.link}>
        <img src={img} alt={name} className={styles.img} />
        <h3 className={styles.name}>{name}</h3>
      </Link>
      <div className={styles.cardFooter}>
        <p className={styles.price}>£{price}</p>
        <button onClick={onAddToCart} className={styles.button}>
          Add to cart {quantity > 0 && `(${quantity})`}
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
