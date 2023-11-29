import { createElement } from './utils.mjs';
import jsonUrl from 'url:../json/work.json';


function Page2() {

    const workInfo = createElement('div', {className: 'listCards'});

    fetch(jsonUrl)
      .then(function (response) {
        return response.json();
       })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const work = jsonObject['work'];
        work.forEach(displayGrid);
      });

      function displayGrid(item){
        let card = document.createElement('div');
        card.setAttribute('class', 'workDiv');
        let name = document.createElement('h2');
        name.setAttribute('class', 'workDiv__name');
        name.textContent = item.name;
        card.appendChild(name);
        let url = document.createElement('h2');
        url.setAttribute('class', 'workDiv__url');
        url.textContent = item.url;
        card.appendChild(url);
        let github = document.createElement('h2');
        github.setAttribute('class', 'workDiv__github');
        github.textContent = item.github;
        card.appendChild(github);
        document.querySelector('div.listCards').appendChild(card);
      }

  return createElement('div', {}, [workInfo]);
}

export default Page2;