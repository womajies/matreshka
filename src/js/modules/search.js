const searchBtn = document.querySelector('.actions__search');

// burger
searchBtn.addEventListener('click', () => {
  const searchForm = document.querySelector('.search');
  const searchField = searchForm.querySelector('.search__field');

  searchForm.classList.toggle('search--active');

  if (searchForm.classList.contains('search--active')) {
    setTimeout(() => {
      searchField.focus();
    }, 0);
  }
});
