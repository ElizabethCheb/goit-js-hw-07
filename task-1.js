const categoriesList = document.getElementById('categories');
const categoriesItems = categoriesList.children;
console.log(`Кількість категорій: ${categoriesItems.length}`);
for (const category of categoriesItems) {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItemsCount = category.querySelectorAll('ul.ul_cate li').length;
  console.log(`Категорія: ${categoryName}`);
  console.log(`Кількість елементів у категорії: ${categoryItemsCount}`);
}
