// Intersection Observer 객체 생성
var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry, index) {
    var target = entry.target;
    var heading = target.querySelector('h1');

    if (entry.isIntersecting) {
        // 섹션이 화면에 보일 때 해당 섹션 이전의 h1 요소들의 내용 원래대로 복원
        for (var i = 0; i < index; i++) {
        var prevSection = entries[i].target;
        prevSection.querySelector('h1').textContent = '';
        }

        // 해당 섹션의 h1 내용 변경
        if (target.id === 'section1') {
            
            heading.style.fontSize = '80px';
        heading.textContent = 'INCEPTION';
        } else if (target.id === 'section2') {
            heading.style.webkitTextStroke = '0'; // 스트로크 스타일 제거
    heading.style.webkitTextFillColor = '#fff';
            heading.style.fontSize = '80px';
        heading.textContent = 'Dream';
        } else if (target.id === 'section3') {
            
            heading.style.fontSize = '80px';
        heading.textContent = 'AND';
        }else if (target.id === 'section4') {
            heading.style.webkitTextStroke = '0'; // 스트로크 스타일 제거
    heading.style.webkitTextFillColor = '#fff';
            heading.style.fontSize = '80px';
            heading.textContent = 'Reality';
            }
    } else {
        // 섹션이 화면에서 사라질 때 h1의 내용 원래대로 복원
        heading.textContent = '';
    }
    });
});

// 각 섹션을 관찰 대상으로 등록
var sections = document.querySelectorAll('.section');
sections.forEach(function(section) {
    observer.observe(section);
});



class FolderScroll {
    constructor(wrapper, sticky) {
    this.wrapper = wrapper
    this.sticky = sticky
    this.children = this.sticky.querySelectorAll('.section1')
    this.length = this.children.length
    this.headerVh = 6
    this.contentVh = 96 - this.headerVh * this.length
    this.start = 0
    this.end = 0
    }

    init() {
    this.start = this.wrapper.offsetTop + 100
    this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight - 100

    this.children.forEach((child, i) => {
        child.style.bottom = -(100 - this.headerVh * (this.length - i)) + 'vh'
        child.querySelector('.title').style.height = this.headerVh + 'vh'
        child.querySelector('.content').style.height = this.contentVh + 'vh'
    })
    }

    animate() {
    this.children.forEach((child, i) => {
        const unit = (this.end - this.start) / this.length
        const s = this.start + unit * i + 100
        const e = this.start + unit * (i + 1)

        if (scrollY <= s) {
        child.style.transform = `translate3d(0, 0, 0)`
        } else if (scrollY >= e) {
        child.style.transform = `translate3d(0, ${-this.contentVh}%, 0)`
        } else {
        child.style.transform = `translate3d(0, ${(scrollY - s) / (unit - 100) * (-this.contentVh)}%, 0)`
        }
    })
    }
}

const mainContent1 = document.querySelector('.main-content-1')
const sticky = document.querySelector('.sticky')
const folderScroll = new FolderScroll(mainContent1, sticky)
folderScroll.init()

window.addEventListener('resize', () => {
    folderScroll.init()
})
window.addEventListener('scroll', () => {
    folderScroll.animate()
})
//
class CardFlipOnScroll {
    constructor(wrapper, sticky) {
    this.wrapper = wrapper
    this.sticky = sticky
    this.cards = sticky.querySelectorAll('.card')
    this.length = this.cards.length

    this.start = 0
    this.end = 0
    this.step = 0
    }

    init() {
    this.start = this.wrapper.offsetTop - 100
    this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight * 1.2
    this.step = (this.end - this.start) / (this.length * 2)
    }

    animate() {
    this.cards.forEach((card, i) => {
        const s = this.start + this.step * i
        const e = s + this.step * (this.length + 1)

        if (scrollY <= s) {
        card.style.transform = `
            perspective(100vw)
            translateX(100vw) 
            rotateY(180deg)
        `
        } else if (scrollY > s && scrollY <= e - this.step) {
        card.style.transform = `
            perspective(100vw)
            translateX(${100 + (scrollY - s) / (e - s) * -100}vw)
            rotateY(180deg)
        `
        } else if (scrollY > e - this.step && scrollY <= e) {
        card.style.transform = `
            perspective(100vw)
            translateX(${100 + (scrollY - s) / (e - s) * -100}vw)
            rotateY(${180 + -(scrollY - (e - this.step)) / this.step * 180}deg)
        `
        } else if (scrollY > e) {
        card.style.transform = `
            perspective(100vw)
            translateX(0vw) 
            rotateY(0deg)
        `
        }
    })
    }
}

const mainContent01 = document.querySelector('.main-content-01')
const sticky0 = document.querySelector('.sticky0')
const cardFlipOnScroll = new CardFlipOnScroll(mainContent01, sticky0)
cardFlipOnScroll.init()

window.addEventListener('scroll', () => {
    cardFlipOnScroll.animate()
})

window.addEventListener('resize', () => {
    cardFlipOnScroll.init()
})

function changeTextAndColor(text, color) {
    var box = document.getElementById('box');
    box.textContent = text;
    box.style.backgroundColor = color;
  }

  var slides = document.getElementsByClassName("slide");
var currentSlideIndex = 0;

// 함수를 호출하여 슬라이드 쇼 시작
var slides = document.getElementsByClassName("slide");
var currentSlideIndex = 0;

var prevButton = document.querySelector(".prev-button");
var nextButton = document.querySelector(".next-button");

var slides = document.querySelectorAll(".slide");
var currentSlideIndex = 0;

var prevButton = document.querySelector(".prev-button");
var nextButton = document.querySelector(".next-button");

var slides = document.getElementsByClassName("slide");
var currentSlideIndex = 0;

// 함수를 호출하여 슬라이드 쇼 시작
startSlideshow();

function startSlideshow() {
  // 초기 슬라이드 표시
  showSlide(currentSlideIndex);

  // 3초마다 다음 슬라이드 표시
  setInterval(function() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
  }, 3000);
}

function showSlide(slideIndex) {
  // 모든 슬라이드의 클래스 제거
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  // 현재 슬라이드에 클래스 추가
  slides[slideIndex].classList.add("active");
}
