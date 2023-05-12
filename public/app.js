import { Gastos } from './classes/Gastos.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
// inputs
const category = document.querySelector('#category');
const concept = document.querySelector('#concept');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('.item-list');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [concept.value, amount.valueAsNumber];
    let doc;
    doc = new Gastos(...values);
    list.render(doc, category.value);
});
