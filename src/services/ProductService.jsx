import axios from "axios";

export const ProductService =  {
  async getProducts(categoryId)  {
    const response = await axios.get(`http://localhost:3000/products?categoryId=${categoryId}`);

    return response.data
  },

  async getBasket(productId, userId)  {
    const response = await axios.get(`http://localhost:3000/baskets?productId=${productId}&userId=${userId}`);

    return response.data
  },

  async buyProduct(data)  {
    await axios.post(`http://localhost:3000/baskets`, data);
  },

  async updateBasket(basketId, data)  {
    console.log(data);

    await axios.put(`http://localhost:3000/baskets/${basketId}`, data);
  },
};
