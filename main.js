'use strict';

// Make navbar transparent when it is not the top
/*
1. document 는 HTML 문서를 지칭한다. 
2. querySelector method('string')은 HEML 태그 선택자로 해당 태그의 내용을 값으로 나타낸다. 
3. getBoundingClientRect method()는 객체의 scale이 조정된 즉, 웹 화면에 나타나는 객체의 사이즈를 나타낸다. 
4. addeventListener('type', fuction()) -> 다양한 type 액션이 시작되면 function에 할당된 내용이 실행된다.
5. height property는 객체의 높이를 number로 나타내준다.
*/
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--black');
  } else {
    navbar.classList.remove('navbar--black');
  }
});

// Scroll the page to the definition for the button
// HTML 태그 커스텀 속성(custom data attribures)
/*
1. 속성의 시작은 반드시 data-로 시작
2. 하나의 태그에 사용할 수 있는 커스텀 데이터 속성의 개수 제한은 없다. 즉, 원하는 만큼 커스텀 데이터 속성을 추가할 수 있다. 
3. 브라우저들은 커스텀 데이터 속성을 만나면 해석하지 않고 skip한다. 따라서 보여지는 화면에 아무런 영향을 주지 않는다. 그러므로 보여야 하고 접근 가능해야하는 내용은 데이터 속성에 저장하지 않는 것이 좋다. 
4. 자바스크립트와 CSS에서도 커스텀 데이터 속성의 정보를 사용할 수 있다.
*/
/*
1. Target property(속성)는 parameter(변수)가 지칭 하는 타겟의 정보를 보여준다.
2. element(요소).scrollIntoView() -> 요소값에 해당하는 부분으로 스크롤 된다.

*/
const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link === undefined) {
    return;
  } else {
    ScrollIntoView(link);
  }
});

// Handle click on "contact me" button on home
const homeContctBtn = document.querySelector('.home_button');
homeContctBtn.addEventListener('click', () => {
  ScrollIntoView('#contact');
});

// make heme slowly fade to transparent as the window scrolls down
// element.style.string으로 작성하면 JS에서 직접적으로 CSS 적용이 가능하다.
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// show "arrow up"button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
console.log(arrowUp);
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visable');
  } else {
    arrowUp.classList.remove('visable');
  }
});

// page up to home whe click the aroow button
arrowUp.addEventListener('click', () => {
  ScrollIntoView('#home');
  console.log('클릭');
});

console.clear();
// Projects
const workBtnContainer = document.querySelector('.work_categories');
const projectContainer = document.querySelector('.work_projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter === undefined) {
    return;
  }
  projectContainer.classList.add('anim-out');

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});

// Method를 function으로 만들어 사용 가능하다.
function ScrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
