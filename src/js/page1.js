import { createElement } from './utils.mjs';

function Page1() {
  
  const appTitle = createElement('h1', {
    textContent: 'Cammie Lee',
    className: 'heading',
  });
  // const page3Link = createElement('a', {
  //   href: '/#/page3',
  //   textContent: 'Link to Page 3',
  // });
const aboutMe = createElement('p', {
  textContent: 'something cool',
  id: 'aboutMeDes'
})
  return createElement('div', {}, [aboutMe, appTitle]);
}

export default Page1;