import Storage from "./Storage.js";

const categoryTitle = document.querySelector("#category-title");
const categoryDescription = document.querySelector("#category-description");
const addNewCetgoryBtn = document.querySelector("#add-new-category");
// const toggleAddCategoryBtn = document.getElementById("toggle-add-category");
// const categoryWrapper = document.querySelector("#category-wrapper");
// const cancelAddCategory = document.querySelector("#cancel-add-category");

class CategoryView {
  constructor() {
    addNewCetgoryBtn.addEventListener("click", (e) => this.addNewCategory(e));
    this.categories = [];
  }
  addNewCategory(e) {
    e.preventDefault();
    const title = categoryTitle.value;
    const description = categoryDescription.value;
    if (!title || !description) return;
    Storage.saveCategory({ title, description });
    this.categories = Storage.getAllCategories();
    // update dom : update select option in category
    this.createCategoriesList();
    categoryTitle.value = "";
    categoryDescription.value = "";
  }
  setCategory() {
    this.categories = Storage.getAllCategories();
  }
  createCategoriesList() {
    let result = `<option class="bg-slate-500 text-slate-300" value="">select a category</option>`;
    this.categories.forEach((element) => {
      result += `<option class="bg-slate-500 text-slate-300" value=${element.id}>${element.title}</option>`;
    });
    const categoryDOM = document.getElementById("product-category");
    categoryDOM.innerHTML = result;
  }
}

export default new CategoryView();
