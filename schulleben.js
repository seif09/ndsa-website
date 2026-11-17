const filters = document.querySelector('#archive-filters');
const category = document.querySelector('#category');
const schoolYear = document.querySelector('#school-year');
const posts = [...document.querySelectorAll('#archive-posts article')];
const status = document.querySelector('#archive-status');

function updateArchive() {
  let count = 0;
  for (const post of posts) {
    const matchesCategory = !category.value || post.dataset.category === category.value;
    const matchesYear = !schoolYear.value || post.dataset.year === schoolYear.value;
    post.hidden = !(matchesCategory && matchesYear);
    if (!post.hidden) count += 1;
  }
  status.textContent = count === 0 ? 'Keine Beiträge für diese Auswahl.' :
    count === 1 ? '1 Beitrag' : count + ' Beiträge';
}

filters.addEventListener('change', updateArchive);
filters.hidden = false;
updateArchive();
