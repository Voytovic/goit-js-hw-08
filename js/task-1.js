const categoriesList = document.getElementById('categories');
const categories = categoriesList.querySelectorAll('li.item');
console.log(`Кількість категорій: ${categories.length}`);
categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('li').length;
  console.log(`Категорія: ${categoryName}, Кількість елементів: ${categoryItems}`);
});
