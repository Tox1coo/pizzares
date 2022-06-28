import { createStore } from "vuex";
import { cityList } from "@/store/modules/city";
import { categoryList } from "@/store/modules/category";
import { products } from "@/store/modules/products";
import { auth } from "@/store/modules/auth";
import { orders } from "@/store/modules/orders";
import { user } from "@/store/modules/user";

export default createStore({
  modules: {
    city: cityList,
    category: categoryList,
    product: products,
    auth: auth,
    orders: orders,
    user: user,
  },
});
