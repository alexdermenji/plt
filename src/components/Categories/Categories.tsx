import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchMenu } from '../../redux/menu/asyncActions';
import { selectMenu } from '../../redux/menu/selectors';
import { useAppDispatch } from '../../redux/store';
import styles from './Categories.module.scss';

const Categories: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { items, status } = useSelector(selectMenu);
  const subCategories = items[0]?.children;

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      <ul>
        {items.map((item: any) => (
          <li
            key={item.name}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <p className={styles.category}>{item.name}</p>
            {isOpen && (
              <div className={styles.popup}>
                <img src={item.img} alt={item.name} />
                <ul className={styles.subCategoriesList}>
                  {subCategories.map((subCategory: any) => (
                    <li
                      className={styles.subCategoriseItem}
                      key={subCategory.name}
                    >
                      {subCategory.name}
                      <ul>
                        {subCategory.categories.map(
                          (category: any, index: number) => (
                            <li className={styles.menuItem} key={index}>
                              {category}
                            </li>
                          )
                        )}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
