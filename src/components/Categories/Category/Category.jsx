import styles from './Category.module.css'
import {Link} from "react-router-dom";

import React from 'react';

const Category = ({category}) => {
  return (
    <Link to={`/menu/${category.id}`} className={styles.item}>
      <img className={styles.image} src={category.image} alt={category.name}/>
      <h3 className={styles.name}>{category.name}</h3>
    </Link>
  )
};

export default Category;
