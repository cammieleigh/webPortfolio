import { createElement } from './utils.mjs';
import workJson from '../json/work.json';


function Page2() {

    const page2Title = createElement('h1', {className: 'workTitle', textContent:'My Projects!'});
    const subtitle = createElement('h2', {className: 'clarifier', textContent: 'Video Demos or website URLs are included in the read me file:)'});
    
    const workInfo = createElement('div', {className: 'listCards'});

        console.log(workJson);  // temporary checking for valid response and data parsing
        const work = workJson['projects'];
        console.log(work);
        work.forEach(displayGrid);
    
      function displayGrid(item){
        let card = document.createElement('div');
        card.setAttribute('class', 'workDiv');
        let name = document.createElement('h2');
        name.setAttribute('class', 'workDiv__name');
        name.textContent = item.name;
        card.appendChild(name);
        // let url = document.createElement('a');
        // url.setAttribute('class', 'workDiv__url');
        // url.setAttribute('href', item.url);
        // url.textContent = 'Check out the site!';
        // card.appendChild(url);
        // let enter = document.createElement('br');
        // card.appendChild(enter);
        let github = document.createElement('a');
        github.setAttribute('class', 'workDiv__github');
        github.setAttribute('href', item.github);
        github.textContent = 'Take a peek at the code';
        card.appendChild(github);
        workInfo.appendChild(card);
      }
      const page2flex = createElement('div', {className: 'page2flex'}, [workInfo, page2Title]);
  return createElement('div', {className: "page2div"}, [page2flex, subtitle ]);
}

export default Page2;
