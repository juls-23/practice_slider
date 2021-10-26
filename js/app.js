const imagesDB = ['https://images.unsplash.com/photo-1604537529586-87ac173f4310?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1888&q=80', 'https://media-exp1.licdn.com/dms/image/C561BAQHWhT4qGmWnJA/company-background_10000/0/1604456998780?e=2159024400&v=beta&t=o7isqpt5qWbn7Wk-CLyusYTZLlMzZunBZHUVGHO0Rdg','https://images.unsplash.com/photo-1422205512921-12dac7b3b603?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1776&q=80', 'https://images.unsplash.com/photo-1524272332618-3a94122bb0c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1565191999001-551c187427bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80']


const slider = new Slider(imagesDB);
const images = document.querySelector('.slide>img');
const [prevBtn, nextBtn] = document.querySelectorAll('.btn');

UpdateView();

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
images.addEventListener('wheel', nextSlide);

function UpdateView() {
  images.setAttribute('src', slider.currentSlide);
}

function nextSlide(){
  slider.currentIndex = slider.next();
  UpdateView();
}

function prevSlide(){
  slider.currentIndex = slider.prev();
  UpdateView();
}

document.addEventListener('keydown', event => {
  if(event.key ==='ArrowRight'){
    nextSlide();
  } else if(event.key === 'ArrowLeft'){
    prevSlide();
  }
})