import { createStore } from "vuex";
import { cityList } from "@/store/modules/city";
import { categoryList } from "@/store/modules/category";

export default createStore({
  modules: {
    city: cityList,
    category: categoryList,
  },
});
