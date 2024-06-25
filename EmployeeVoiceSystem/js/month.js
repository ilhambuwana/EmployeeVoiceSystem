document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.left-side ul li');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
});
