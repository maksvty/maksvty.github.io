import {useParams} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {ProductService} from "../../../services/ProductService";
import styles from "../../Categories/Categories.module.css";
import Product from "../../Product/Product";

const CategoryPage = () => {
  const {categoryId} = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await ProductService.getProducts(categoryId);

      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.items}>
      {products.length ? products.map(product => (
          <Product key={product.id} id={product.id} img={product.image} name={product.name} price={product.price}/>
        ))
        : <p>Категорий нет</p>
      }
    </div>
  )
};

export default CategoryPage;
