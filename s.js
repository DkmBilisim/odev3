function filterItems(category) {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
      if (category === 'tum' || item.dataset.category === category) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }