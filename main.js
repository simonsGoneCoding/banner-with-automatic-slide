const slideList = [{
  img: 'images/img1.jpg',
  text: 'First text'
 },
 {
  img: 'images/img2.jpg',
  text: 'Second text'
 },
 {
  img: 'images/img3.jpg',
  text: 'Third text'
 }
]

//interface
const image = document.querySelector('img.slider')
const h1 = document.querySelector('h1.slider')
const dots = [...document.querySelectorAll('.dots span')]
const time = 5000;
let activeSlide = 0;

//implementations
const changeDot = () => {
 const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
 dots[activeDot].classList.remove('active');
 dots[activeSlide].classList.add('active')
}

const changeSlide = () => {
 activeSlide++
 if (activeSlide === slideList.length) {
  activeSlide = 0;
 }
 image.src = slideList[activeSlide].img
 h1.textContent = slideList[activeSlide].text
 changeDot()
}

setInterval(changeSlide, time)