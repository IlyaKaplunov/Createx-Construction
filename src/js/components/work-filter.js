const workTabsNav = document.querySelector('.work-portfolio__tabs');
const workTabsNavButtons = document.querySelectorAll('.work-tabs__item');
const workTabsItems = document.querySelectorAll('.work-portfolio__item');
const workTabsItemsVisible = document.querySelectorAll('.work-portfolio__item--visible');
const loadMore = document.querySelector('.work-portfolio__more');
const maxItems = 9;

if (workTabsNav) {
  const isLoadMoreNeeded = (selector) => {
    if (selector.length <= maxItems) {
      loadMore.style.display = 'none';
    } else {
      loadMore.style.display = 'inline-flex';
    }
  };

  const hideMoreItems = (selector) => {
    if (selector.length > maxItems) {
      const arr = Array.from(selector);
      const hiddenItems = arr.slice(maxItems, selector.length);

      hiddenItems.forEach(el => {
        el.classList.remove('work-portfolio__item--visible');
        el.classList.remove('work-portfolio__item--visible-more');
      });
    }
  };

  workTabsNav.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;
    if (target.classList.contains('work-tabs__item')) {
      const path = target.dataset.path;

      workTabsNavButtons.forEach(el => { el.classList.remove('work-tabs__item--active')});
      target.classList.add('work-tabs__item--active');

      workTabsItems.forEach(el => {
        el.classList.remove('work-portfolio__item--visible');
        el.classList.remove('work-portfolio__item--visible-more');
      });

      document.querySelectorAll(`[data-target="${path}"]`).forEach(el => {
        el.closest('.work-portfolio__item').classList.add('work-portfolio__item--visible');
      });

      isLoadMoreNeeded(document.querySelectorAll(`[data-target="${path}"]`));
      hideMoreItems(document.querySelectorAll('.work-portfolio__item--visible'));

      if (path == 'all') {

        workTabsItems.forEach(el => {
          el.classList.add('work-portfolio__item--visible');
        });

        isLoadMoreNeeded(document.querySelectorAll('.work-portfolio__item--visible'));
        hideMoreItems(document.querySelectorAll('.work-portfolio__item--visible'));
      }
    }
  });

  hideMoreItems(workTabsItems);
  isLoadMoreNeeded(workTabsItemsVisible);

  loadMore.addEventListener('click', (e) => {
    const visibleItems = document.querySelectorAll('.work-portfolio__item--visible');

    const path = document.querySelector('.work-tabs__item--active').dataset.path;
    console.log(path)

    if (path == 'all') {
      workTabsItems.forEach(el => {
        el.classList.add('work-portfolio__item--visible-more');
        loadMore.style.display = 'none';
      });
    } else {
      document.querySelectorAll(`[data-target="${path}"]`).forEach(el => {
        el.closest('.work-portfolio__item').classList.add('work-portfolio__item--visible-more');
      });
      loadMore.style.display = 'none';
    }
  });
}