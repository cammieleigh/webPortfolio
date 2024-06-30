import { createElement } from './utils.mjs';
import profilePic from '../images/profilePic.jpg';
import headerTitle from './app.js';

function Page1() {
  
  const nameSpan = createElement('span', {textContent: 'Cammie Lee', className: 'heading__title'})
  const appTitle = createElement('h1', {
    className: 'heading',
  }, [nameSpan]);

  const img = createElement('img', {id:'page1img',  src: profilePic, alt:'image of me'})
  const desSpan = createElement('span', {textContent: 'Web Developer and Database Engineer', className: 'aboutMeDes__content'})
const aboutMe = createElement('p', {className: 'aboutMeDes'
}, [desSpan]);

  return createElement('div', {id:'page1main'}, [appTitle, img, aboutMe ]);
}

export default Page1;