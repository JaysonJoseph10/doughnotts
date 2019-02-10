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
    'https://scontent.cdninstagram.com/vp/81d1ea0b309e8d68a5b12dd4d002ae0a/5C8D15D2/t51.2885-15/sh0.08/e35/p640x640/46399768_581519475626907_2931664920864068574_n.jpg',
    'https://scontent.cdninstagram.com/vp/cca23d360fac0cd517c05389c30a281b/5CAC5E9B/t51.2885-15/sh0.08/e35/p640x640/45703448_300305693940779_379820531169170362_n.jpg?_nc_ht=scontent.cdninstagram.com',
    'https://scontent.cdninstagram.com/vp/a4abc31fb585ec9a0972a72386437160/5C67EA02/t51.2885-15/sh0.08/e35/s640x640/41729506_346759436080290_5308590761740850666_n.jpg'
  ],
  [
    'https://scontent.cdninstagram.com/vp/b4b92ed4eaaf99e9efc7951f63dff3eb/5C90CD84/t51.2885-15/sh0.08/e35/s640x640/46652081_270797426965990_5224280125606451869_n.jpg',
    'https://scontent.cdninstagram.com/vp/ae675ba7e1d58c9455895f54be6a9178/5CA7007C/t51.2885-15/sh0.08/e35/s640x640/44603836_944275999099951_8637240914046590514_n.jpg',
    'https://scontent.cdninstagram.com/vp/44c866c4b0e8f01fa26071f904162475/5C9DC015/t51.2885-15/sh0.08/e35/p640x640/47230427_312434122936138_5480478418395800693_n.jpg?_nc_ht=scontent.cdninstagram.com',
  ],
  [
    'https://scontent.cdninstagram.com/vp/61f8cf43fb3795486b814bfd7e0fd82c/5C951597/t51.2885-15/sh0.08/e35/s640x640/46623433_440606079806641_8599697376393511319_n.jpg?_nc_ht=scontent.cdninstagram.com',
    'https://scontent.cdninstagram.com/vp/00f48d3bc8f92fd0d9b2265be3af95ec/5CB18E53/t51.2885-15/sh0.08/e35/s640x640/45501316_947355185435147_7766772780014966614_n.jpg',
    'https://scontent.cdninstagram.com/vp/b96ec20de0eef9a7ba6920d6a12dfca0/5CB18851/t51.2885-15/sh0.08/e35/p640x640/45318779_2959726834053556_5408958845344130872_n.jpg'
  ],
  [
    'https://scontent.cdninstagram.com/vp/c08dd9e2c45eba41e4bf147e290a760f/5CB267A3/t51.2885-15/sh0.08/e35/s640x640/45381708_569961636765705_2098069346629972306_n.jpg',
    'https://scontent.cdninstagram.com/vp/f51cfc7cd2a89f2b3b4ae1839ed89445/5C92B9B8/t51.2885-15/sh0.08/e35/s640x640/46593516_2005282636232277_136114127607033234_n.jpg',
    'https://scontent.cdninstagram.com/vp/5eb3e9a50a05756a8648163a2258653c/5CA9FA2A/t51.2885-15/sh0.08/e35/s640x640/44803117_340296483426261_6557964248686423335_n.jpg?_nc_ht=scontent.cdninstagram.com'
  ],
  [
    'https://scontent.cdninstagram.com/vp/cb7c749923c37c7fc231a0a9b806bd3f/5C9EA72E/t51.2885-15/sh0.08/e35/p640x640/46354134_357868971637683_9180685213563068743_n.jpg',
    'https://scontent.cdninstagram.com/vp/c8e93441e37efaf314c21141a0f4aa32/5C9B2C85/t51.2885-15/sh0.08/e35/p640x640/44502847_2021550877914691_1125156467748532602_n.jpg',
    'https://scontent.cdninstagram.com/vp/6f3bc7faa9fe48d1f5460f2bb3d37d40/5C8DBD9D/t51.2885-15/sh0.08/e35/s640x640/46672290_282361175748506_2766744334843745121_n.jpg?_nc_ht=scontent.cdninstagram.com'
  ],
  [
    'https://scontent.cdninstagram.com/vp/a60b54c4210332325bdfa77e66c50d12/5CAAD4B6/t51.2885-15/sh0.08/e35/s640x640/45643781_383309719074317_6749347089857396779_n.jpg?_nc_ht=scontent.cdninstagram.com',
    'https://scontent.cdninstagram.com/vp/7e1d4f2e3b628326b60933863f0f2788/5C9A6EC9/t51.2885-15/sh0.08/e35/p640x640/46196982_383985602340344_2747902063649342558_n.jpg',
    'https://scontent.cdninstagram.com/vp/9b4345f4c789df75a2b7ca58fca5a565/5C8B034C/t51.2885-15/sh0.08/e35/s640x640/45376056_300389977472328_6688798769216962041_n.jpg'
  ],
  [
    'https://scontent.cdninstagram.com/vp/46d4896c1f6de86339d6d00907bbd455/5CD3F347/t51.2885-15/sh0.08/e35/p640x640/47581212_1954056374675649_6880423510932205987_n.jpg?_nc_ht=scontent.cdninstagram.com',
    'https://scontent.cdninstagram.com/vp/50ab73746b29d90b069b39a693af956d/5C9A822E/t51.2885-15/sh0.08/e35/s640x640/46999509_210425976514597_1505535631567822525_n.jpg?_nc_ht=scontent.cdninstagram.com',
    'https://scontent.cdninstagram.com/vp/f22acf0926d0bd8a509bb55e0684a9a6/5C9BE089/t51.2885-15/sh0.08/e35/s640x640/45738370_1956214381161230_3343872895510936488_n.jpg?_nc_ht=scontent.cdninstagram.com'
  ],
  [
    'https://scontent.cdninstagram.com/vp/4fedaf604d1b10db5624e7d38adc8b3e/5CAA226D/t51.2885-15/sh0.08/e35/s640x640/44843563_124919735173238_6447339478845765744_n.jpg?_nc_ht=scontent.cdninstagram.com',
    'https://scontent.cdninstagram.com/vp/5ec9651273155e6710a56162b313847f/5C9F3A83/t51.2885-15/sh0.08/e35/s640x640/45804414_2074711109253477_1225077282553638766_n.jpg',
    'https://scontent.cdninstagram.com/vp/0d8f1d3faac670e1b4eee8e901eb2fbb/5C955BF9/t51.2885-15/sh0.08/e35/s640x640/44844632_508181703022343_6384771201205519184_n.jpg'
  ],
  [
    'https://scontent.cdninstagram.com/vp/8760850d5a9339ef71d8756bd6e8674d/5C8FE11C/t51.2885-15/sh0.08/e35/s640x640/44456679_2156785084352550_5010991646676120232_n.jpg',
    'https://scontent.cdninstagram.com/vp/fffa8168ab5721c7939035326785863d/5CAA321E/t51.2885-15/sh0.08/e35/s640x640/44835971_1953014368334570_7006649196635534257_n.jpg',
    'https://scontent.cdninstagram.com/vp/44d20dc73663be4875e11f2514331f7c/5C971505/t51.2885-15/sh0.08/e35/s640x640/46317859_1930595283903000_1030133158661585513_n.jpg'
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
