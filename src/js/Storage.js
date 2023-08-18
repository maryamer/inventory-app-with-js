const products = [
  {
    id: 1,
    title: "React.js",
    category: "frontend",
    createdAt: "2021-10-31T15:02:00.411Z",
  },
  {
    id: 2,
    title: "Node.js",
    category: "backend",
    createdAt: "2021-10-31T15:03:23.556Z",
  },
  {
    id: 3,
    title: "Vue.js",
    category: "frontend",
    createdAt: "2021-11-01T10:47:26.889Z",
  },
];

const categories = [
  {
    id: 1,
    title: "frontend",
    description: "frontend of applications",
    createdAt: "2021-11-01T10:47:26.889Z",
  },
  {
    id: 2,
    title: "backend",
    description: "the backend of the applications",
    createdAt: "2021-10-01T10:47:26.889Z",
  },
];

export default class Storage {
  // add-save-edit-get category
  static getAllCategories() {
    const savedCategories = JSON.parse(localStorage.getItem("category")) || [];
    const sortedCategories = savedCategories.sort((a, b) => {
      return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
    });
    return sortedCategories;
  }
  static saveCategory(categoryToSave) {
    const savedCategories = Storage.getAllCategories();
    const existedItem = savedCategories.find((c) => c.id == categoryToSave.id);
    const { title, description } = categoryToSave;
    if (existedItem) {
      // edit
      existedItem.title = title;
      existedItem.description = description;
    } else {
      const newCategory = {
        title: title,
        description: description,
        id: new Date().getTime(),
        createdAt: new Date().toISOString(),
      };
      categories.push(newCategory);
    }
    //
    localStorage.setItem("category", JSON.stringify(categories));
  }
  static getAllProducts() {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    return savedProducts.sort((a, b) => {
      return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
    });
  }
  static saveProducts(productToSave) {
    const savedProducts = Storage.getAllProducts();
    const existedItem = savedProducts.find((p) => p.id == productToSave.id);
    const { title, quantity, category } = productToSave;
    if (existedItem) {
      existedItem.title = title;
      existedItem.quantity = quantity;
      existedItem.category = category;
    } else {
      const newProduct = {
        title: title,
        quantity: quantity,
        category: category,
        id: new Date().getTime(),
        createdAt: new Date().toISOString(),
      };
      products.push(newProduct);
    }
    localStorage.setItem("products", JSON.stringify(products));
  }
}
