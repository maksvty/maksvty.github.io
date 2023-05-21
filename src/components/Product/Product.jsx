import React from 'react';

import styles from './Product.module.css'
import {ProductService} from "../../services/ProductService";

const Product = ({img, name, price, weight, id}) => {
  const buyProduct = async () => {
    const data = await ProductService.getBasket(id, 1);

    if (data.length) {
      console.log(data);
      await ProductService.updateBasket(data[0].id, {
        productId: id,
        name: name,
        userId: 1,
        quantity: data[0].quantity + 1
      });
    } else {
      await ProductService.buyProduct({
        productId: id,
        name: name,
        userId: 1,
        quantity: 1
      });
    }
  }

  return (
    <div className={styles.product}>
      <img className={styles.img} src={img} alt={name}/>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.buy_line}>
          <div className={styles.price}>
            {price} ₽
          </div>
          <button className="btn" onClick={buyProduct}>В корзину</button>
        </div>
      </div>
    </div>
  )
};

export default Product;
