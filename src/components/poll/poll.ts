import { IConfig } from '../../types';
import LocalStorage from '../../services/localStorage';
import showResult from '../pollResult/pollResult';

function handleSubmit(e: any, pollId: string, optionsId: string) {
  e.preventDefault();
  console.log('submitting');

  const form = document.getElementById('op-poll__form');
  if (!form) {
    return;
  }

  const formData = new FormData(form as HTMLFormElement);
  const localStorageClient = new LocalStorage({ key: pollId })
  localStorageClient.savePolls(formData.get(optionsId) as string);

  // showResult();
}

export default function loadPoll(config: IConfig): void {
  const { elementId, question, options, pollId } = config
  

  const formQuestion = document.createElement('p');
  formQuestion.innerText = question;

  const optionsContainer = document.createElement('div');
  optionsContainer.setAttribute('class', 'op-poll__options');

  options.values.forEach((option, index) => {
    const id = `op-radio-${index}`

    const inputField = document.createElement('input');
    inputField.setAttribute('type', 'radio');
    inputField.setAttribute('id', id);
    inputField.setAttribute('value', id);
    inputField.setAttribute('name', options.id);

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
  submitButton.setAttribute('class', 'op-poll__button');
  submitButton.innerText = 'Submit';

  const form = document.createElement('form');
  form.addEventListener('submit', (e) => handleSubmit(e, pollId, options.id));
  form.setAttribute('class', 'op-poll__form');
  form.setAttribute('id', 'op-poll__form');
  form.appendChild(formQuestion);
  form.appendChild(optionsContainer);
  form.appendChild(submitButton);

  const container = document.getElementById(elementId);
  if (container) {
    container.appendChild(form);
  }
}
