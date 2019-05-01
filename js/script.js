var tileBg = document.getElementsByClassName('tile-bg')
var toTopBtn = document.getElementsByClassName('back-to-top')[0]
var header = document.getElementById('header')
var headerPos = header.offsetTop
var menuBtn = document.getElementsByClassName('menu-btn')[0]
var mobileMenu = document.getElementsByClassName('mobile-menu')[0]
var exitBtn = document.getElementsByClassName('exit-menu-btn')[0]
var body = document.getElementsByTagName('body')[0]

//Mobile menu functionality
function btnClicked() {
  mobileMenu.classList.add('active')
  body.style.overflow = 'hidden'
  exitBtn.addEventListener('click', function(){
    mobileMenu.classList.remove('active')
    body.style.overflowY = 'scroll'
  })
}
menuBtn.addEventListener('click', function(event){
  event.preventDefault()
  btnClicked()
})

//Dyanmic image gallery functionality
var imgArraySet = [
  [
    'img/gallery-imgs/t1-0.jpg',
    'img/gallery-imgs/t1-1.jpg',
    'img/gallery-imgs/t1-2.jpg'
  ],
  [
    'img/gallery-imgs/t2-0.jpg',
    'img/gallery-imgs/t2-1.jpg',
    'img/gallery-imgs/t2-2.jpg'
  ],
  [
    'img/gallery-imgs/t3-0.jpg',
    'img/gallery-imgs/t3-1.jpg',
    'img/gallery-imgs/t3-2.jpg'
  ],
  [
    'img/gallery-imgs/t4-0.jpg',
    'img/gallery-imgs/t4-1.jpg',
    'img/gallery-imgs/t4-2.jpg'
  ],
  [
    'img/gallery-imgs/t5-0.jpg',
    'img/gallery-imgs/t5-1.jpg',
    'img/gallery-imgs/t5-2.jpg'
  ],
  [
    'img/gallery-imgs/t6-0.jpg',
    'img/gallery-imgs/t6-1.jpg',
    'img/gallery-imgs/t6-2.jpg'
  ],
  [
    'img/gallery-imgs/t7-0.jpg',
    'img/gallery-imgs/t7-1.jpg',
    'img/gallery-imgs/t7-2.jpg'
  ],
  [
    'img/gallery-imgs/t8-0.jpg',
    'img/gallery-imgs/t8-1.jpg',
    'img/gallery-imgs/t8-2.jpg'
  ],
  [
    'img/gallery-imgs/t9-0.jpg',
    'img/gallery-imgs/t9-1.jpg',
    'img/gallery-imgs/t9-2.jpg'
  ]
]

var index = 0

function cycleImg() {
  var i
  for (i = 0; i < tileBg.length; i++) {
    switch (i) {
      //None timeout tiles
      case 0:
      tileBg[i].src = imgArraySet[0][index]
        break
      case 2:
      tileBg[i].src = imgArraySet[2][index]
        break
      case 4:
      tileBg[i].src = imgArraySet[4][index]
        break
      case 6:
      tileBg[i].src = imgArraySet[6][index]
        break
      case 8:
      tileBg[i].src = imgArraySet[8][index]
        break

      //Tiles with timeout
      case 1:
      setDelay(i)
        break
      case 3:
      setDelay(i)
        break
      case 5:
      setDelay(i)
      case 7:
      setDelay(i)
        break
      default:
    }
  }
  function setDelay(i) {
    setTimeout(function(){
      tileBg[i].src = imgArraySet[i][index]
    },500)
  }

  index++
  if (index >= imgArraySet[1].length) {
    index = 0
  }
}
setInterval(cycleImg, 1000)

//Back to top button functionality
this.onscroll = function () {
   toTopBtnOpacity()
}

function toTopBtnOpacity() {
  if (this.pageYOffset >= (headerPos + 300)) {
    toTopBtn.style.display = 'flex'
    toTopBtn.classList.add('active')
  } else if (this.pageYOffset < (headerPos + 300)){
    toTopBtn.classList.remove('active')
  }
}
