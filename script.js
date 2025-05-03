document.querySelector('.burger').addEventListener('click', ()=>{
    document.querySelector('.nav-menu').classList.toggle('open');
  });
  
  document.querySelectorAll('.filters')[0].addEventListener('submit', e=>{
    e.preventDefault();
    alert('Фильтры применены');
  });
  