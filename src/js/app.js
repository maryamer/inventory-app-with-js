// target:
// 1.create category
// 2.create product based on selected category
// 3.edit product
// 4.remove product
// 5.save products in local storage
//storage class for handle application methods
// productview class
// categoryview class
//  main and app class
import CategoryView from "./CategoryView.js";
import ProductView from "./ProductView.js";
import Storage from "./Storage.js";
document.addEventListener("DOMContentLoaded", () => {
  CategoryView.setCategory();
  ProductView.setProducts();
  CategoryView.createCategoriesList();
  ProductView.createProductList(ProductView.products);
});
class App {}
