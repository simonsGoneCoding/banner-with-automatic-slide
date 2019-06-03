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

let indexInterval = setInterval(changeSlide, time)

const keyChangeSlide = (e) => {

  //--------changed with improved code--------

  // if (e.keyCode === 37) {
  //   activeSlide--
  //   if (activeSlide < 0) {
  //     activeSlide = 2;
  //   }
  // } else if (e.keyCode === 39) {
  //   activeSlide++
  //   if (activeSlide === slideList.length) {
  //     activeSlide = 0;
  //   }
  // }

  //---------improved code below--------

  if (e.keyCode === 37 || e.keyCode === 39) {
    clearInterval(indexInterval)
    e.keyCode === 37 ? activeSlide-- : activeSlide++
    if (activeSlide < 0) {
      activeSlide = 2
    } else if (activeSlide === slideList.length) {
      activeSlide = 0
    }
  }
  image.src = slideList[activeSlide].img
  h1.textContent = slideList[activeSlide].text
  changeDot()
  indexInterval = setInterval(changeSlide, time)
}

window.addEventListener('keyup', keyChangeSlide)