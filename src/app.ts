import { Gastos } from './classes/Gastos.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const category = document.querySelector('#category') as HTMLSelectElement;
const concept = document.querySelector('#concept') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('.item-list') as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values: [string, number];
  values = [concept.value, amount.valueAsNumber];

  let doc: HasFormatter;
  doc = new Gastos(...values);
  
  list.render(doc, category.value);
});
