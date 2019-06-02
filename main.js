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

const image = document.querySelector('img.slider')
const h1 = document.querySelector('h1.slider')
//interface
const time = 1000;
let activeSlide = 0;

const changeSlide = () => {
 activeSlide++
 if (activeSlide === slideList.length) {
  activeSlide = 0;
 }
 image.src = slideList[activeSlide].img
 h1.textContent = slideList[activeSlide].text

}

setInterval(changeSlide, time)

//implementation