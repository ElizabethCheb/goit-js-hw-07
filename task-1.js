const categoriesList = document.getElementById('categories');
const categoriesItems = categoriesList.querySelectorAll('li.item');
console.log(`Total categories: ${categoriesItems.length}`);
categoriesItems.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItemsCount = category.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements count: ${categoryItemsCount}`);
});
