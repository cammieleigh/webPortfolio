import { createElement } from './utils.mjs';

function Page3() {
  const title = createElement('h2', { className: 'aboutMe__welcome', textContent: 'Hi There!' });
  const aboutMe = createElement('p', {className: 'aboutMe', textContent: 'My name is Cammie Lee, and I love cats, fun colors, and my husband. I am a software engineering major at BYU-Idaho, and a Database Engineer for Brevium.'})
  return createElement('div', {}, [title, aboutMe]);
}

export default Page3;