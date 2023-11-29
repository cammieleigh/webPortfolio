export function createElement(type, props = {}, children = []) {
    const element = document.createElement(type);
  
    // props: {textContent: "Hello world!", id: "header1", "data-productId": 123, ...}
    Object.entries(props).forEach(([key, value]) => {
      if(~key.indexOf('-')) {
        element.setAttribute(key, value); // data attributes
      } else {
        element[key] = value;
      }
    });
  
    children.forEach((child) => {
      element.appendChild(child);
    });
  
    return element;
  }
  

//Hamburger Menu
// let burger = document.querySelector('#btn');
// let menu = document.querySelector('.navBar__items');

// function show() {
//     menu.classList.toggle('showMenu');
// }
// burger.addEventListener('click', show);

let burger = document.querySelector('#btn');

if (!burger){
  console.log('working');
}