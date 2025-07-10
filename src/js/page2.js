import { createElement } from './utils.mjs';
import workJson from '../json/work.json';


function Page2() {

    const page2Title = createElement('h1', {className: 'workTitle', textContent:'My Projects!'});    
    const workInfo = createElement('div', {className: 'listCards'});

        console.log(workJson);  // temporary checking for valid response and data parsing
        const work = workJson['projects'];
        console.log(work);
        work.forEach(displayGrid);
    
      function displayGrid(item){
        let full = document.createElement('div');
        full.setAttribute('class', 'fullDiv');
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
        let img1 = document.createElement("img");
        img1.setAttribute('class', 'workImg');
        //img1.src = item.images.path1;
        let img2 = document.createElement("img");
        img2.setAttribute('class', 'workImg');
        //img2.src = item.images.path2;
        let img3 = document.createElement("img");
        img3.setAttribute('class', 'workImg');
        console.log(item.images.img3);
        //img3.src = item.images.path3;
        full.appendChild(card);
        full.appendChild(img1);
        full.appendChild(img2);
        full.appendChild(img3);
        workInfo.appendChild(full);
      }
      const page2flex = createElement('div', {className: 'page2flex'}, [workInfo, page2Title]);
  return createElement('div', {className: "page2div"}, [ page2flex ]);
}

export default Page2;
