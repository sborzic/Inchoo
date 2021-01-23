const list = document.getElementById('list');
const scrollUp = document.getElementById('scroll-up');
const scrollDown = document.getElementById('scroll-down');


const scroll = (event)=>{
  const direction = event.target.innerHTML;
  if (direction === 'DOWN') {
    list.scrollBy(0, 121);
  } else {
    list.scrollBy(0, -121);
  }
  
}

scrollUp.addEventListener('click', scroll);
scrollDown.addEventListener('click', scroll)

