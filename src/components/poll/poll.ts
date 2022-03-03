import './poll.css';
import { IConfig } from '../../types';

function handleSubmit(e: Event) {
  e.preventDefault();
  console.log('submitting');
}

export default function loadPoll(window: Window): void {
  const config: IConfig = require(`../../configs/${__CONFIG}`);

  if (!config) {
    throw new Error(`Config not found.`);
  }

  const { elementId, question, options} = config

  const formQuestion = document.createElement('p');
  formQuestion.innerText = question;

  const optionsContainer = document.createElement('div');
  optionsContainer.setAttribute('class', 'op-poll__options');

  options.forEach((option, index) => {
    const id = `op-radio-${index}`

    const inputField = document.createElement('input');
    inputField.setAttribute('type', 'radio');
    inputField.setAttribute('id', id);
    inputField.setAttribute('name', `op-poll`);
    inputField.setAttribute('value', option);

    const label = document.createElement('label');
    label.setAttribute('for', id);
    
    const inputText = document.createElement('span');
    inputText.innerText = option;
    
    label.appendChild(inputField);
    label.appendChild(inputText);
    
    optionsContainer.appendChild(label);
  });

  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.innerText = 'Submit';

  const form = document.createElement('form');
  form.addEventListener('submit', handleSubmit);
  form.setAttribute('class', 'op-poll__form');
  form.appendChild(formQuestion);
  form.appendChild(optionsContainer);
  form.appendChild(submitButton);

  const container = document.getElementById(elementId);
  if (container) {
    container.appendChild(form);
  }
}
