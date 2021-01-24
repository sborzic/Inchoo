const list = document.getElementById('list');
const scrollUp = document.getElementById('scroll-up');
const scrollDown = document.getElementById('scroll-down');
const cartButton = document.querySelector('.cart-button');

const scroll = (event)=>{
  const direction = event.target.id;
  if (direction === 'scroll-up') {
    list.scrollBy(0, -81);
  } else {
    list.scrollBy(0, 81);
  }  
}

const toggleCart = ()=>{
  const cart = document.querySelector('.list-wrapper');
  cart.classList.toggle('show-cart');
}

scrollUp.addEventListener('click', scroll);
scrollDown.addEventListener('click', scroll);
cartButton.addEventListener('click', toggleCart)

