import styles from "./Categories.module.css";
import React, {useEffect, useState} from "react";

import {FolderService} from "../../services/FolderService.js";
import Category from "./Category/Category.jsx";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await FolderService.getAllCategories();

      setCategories(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <h3>Категории</h3>
      <div className={styles.items}>
        {categories.length ? categories.map(category => (
            <Category key={category.id} category={category} />
          ))
          : <p>Категорий нет</p>
        }
      </div>
    </>
  )
};

export default Categories;
