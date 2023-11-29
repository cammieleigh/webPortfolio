import { findExampleById } from "./utils";

let example = {};

export default async function exampleDetails(exampleId) {
  // get the details for the current product. findProductById will return a promise! use await or .then() to process it
  example = await findExampleById(exampleId);
  // once we have the product details we can render out the HTML
  renderExampleDetails();

}

function renderExampleDetails() {
           let card = document.createElement('div');
        card.setAttribute('class', 'workDiv');
        let name = document.createElement('h2');
        name.setAttribute('class', 'workDiv__name');
        name.textContent = example.name;
        card.appendChild(name);
        let url = document.createElement('h2');
        url.setAttribute('class', 'workDiv__url');
        url.textContent = example.url;
        card.appendChild(url);
        let github = document.createElement('h2');
        github.setAttribute('class', 'workDiv__github');
        github.textContent = example.github;
        card.appendChild(github);
        document.querySelector('div.listCards').appendChild(card);
  }