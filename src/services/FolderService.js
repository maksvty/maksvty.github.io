import axios from "axios";

export const FolderService =  {
  async getAllCategories()  {
    const response = await axios.get('http://localhost:3000/categories');

    return response.data
  },

  async getCategory(id)  {
    const response = await axios.get(`http://localhost:3000/categories?id=${id}`);

    return response.data
  },

  async addCategory(data)  {
    await axios.post(`http://localhost:3000/categories`, data);
  },
};
