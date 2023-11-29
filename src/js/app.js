import { createElement } from './utils.mjs';
import { initRouter } from './router';


function Header(mainDiv) {
  

  // nav items
  const hamburger = createElement('button', 
  {textContent: 'Menu',
   id: 'btn'});
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
  const navDiv = createElement ('div', {className: 'navBar__items'}, [page1, page2, page3]);
  const nav = createElement('nav', {className: 'navBar'}, [hamburger, navDiv]);

  return createElement('header', {}, [nav]);
}

function Footer() {
  const copyright = createElement('span', {
    textContent: `Copyright © ${new Date().getFullYear()}`,
  });

  return createElement('footer', {}, [copyright]);
}

function App() {
  const main = createElement('main', {}, []);

  initRouter(main);

  return createElement('div', {}, [Header(main), main, Footer()]);
}

export default App;