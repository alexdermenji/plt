import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../../pages/Home/Home';
import Cart from '../../pages/Cart/Cart';
import Product from '../../pages/Product/Product';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
