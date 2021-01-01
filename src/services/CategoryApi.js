import Api from "./Api";

const API_URL = process.env.REACT_APP_API_URL;

const CategoryApi = {
  async get(query) {
    const url =
      process.env.REACT_APP_MODE === "local"
        ? "/categories.json"
        : Api.buildUrl(API_URL, "categories", query);
        
    return await Api.get(url);
  },
};

export default CategoryApi;
