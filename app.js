const link = document.querySelectorAll('#menu li');
const checkbox = document.getElementById('checkbox');
const menu = document.getElementById('menu');
const social = document.querySelectorAll('.social a')
link.forEach(l => {
    l.addEventListener('click', () => {
        checkbox.checked = false;
        menu.classList.remove('open');
        menu.classList.add('closing');
})
})

checkbox.addEventListener('click', () => {
    const isOpen = checkbox.checked;
  
    if (isOpen) {
      menu.classList.remove('closing');
      menu.classList.add('open');
    } else {
      menu.classList.remove('open');
      menu.classList.add('closing');
    }
      document.querySelectorAll('#menu li, .social a').forEach(element => {
      if (isOpen) {
        element.style.visibility = 'visible';
        element.style.opacity = '1';
      } else {
        element.style.visibility = 'hidden';
        element.style.opacity = '0';
      }
    });
  });