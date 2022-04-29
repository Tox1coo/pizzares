import { createStore } from "vuex";
import { cityList } from "@/store/modules/city";
import { categoryList } from "@/store/modules/category";
import { products } from "@/store/modules/products";

export default createStore({
  modules: {
    city: cityList,
    category: categoryList,
    product: products,
  },
});
