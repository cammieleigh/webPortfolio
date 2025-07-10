import { createElement } from './utils.mjs';
import { initRouter } from './router';
import menuBtn from './src/images/menu-icon.webp';


function Header(mainDiv) {
  const menubtn = createElement('img', {src: menuBtn, className:'menuImg'} )
  const hamburger = createElement('button', 
  {
   className: 'btn'}, [menubtn]);
   
  const page1 = createElement('a', {
    href: '/#/page1',
    textContent: 'Home',
  });
  const page2 = createElement('a', {
    href: '/#/page2',
    textContent: 'My Work',
  });
  const page3 = createElement('a', {
    href: '/#/page3',
    textContent: 'About Me',
  });

  const headerTitle = createElement('h1', {textContent:'Hello There', className:'headerTitle'});



  const navDiv = createElement ('div', {className: 'navBar__items'}, [page1, page2, page3]);
  const nav = createElement('nav', {className: 'navBar'}, [navDiv]);

  function show() {
    navDiv.classList.toggle('showMenu');
    // hamburger.classList.toggle('none');
    // menubtn.classList.toggle('none');
}
hamburger.addEventListener('click', show);

  return createElement('header', {}, [hamburger, nav, headerTitle]);
}

function Footer() {
  // const copyright = createElement('span', {
  //   textContent: `Copyright © ${new Date().getFullYear()}`,
  // });

  // return createElement('footer', {}, [copyright]);
}

function App() {
  const main = createElement('main', {}, []);

  initRouter(main);

  return createElement('div', {}, [Header(main), main]);
}

export default App;