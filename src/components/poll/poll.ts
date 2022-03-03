import { IConfig } from '../../types';
import LocalStorage from '../../services/localStorage';
import showResult from '../pollResult/pollResult';

const CLASSNAME_MAPPINGS = {
  FORM: 'op-poll__form',
  OPTIONS: 'op-poll__options',
  BUTTON: 'op-poll__button',
}

function handleSubmit(e: any, pollId: string, optionsId: string, config: IConfig): void {
  e.preventDefault();
  console.log('submitting');

  const form = document.getElementById(CLASSNAME_MAPPINGS.FORM);
  if (!form) {
    return;
  }

  const formData = new FormData(form as HTMLFormElement);
  const localStorageClient = new LocalStorage({ key: pollId })
  localStorageClient.savePolls(formData.get(optionsId) as string)
    .then(() => {
      showResult(config);
    })
    .catch(e => {
      throw new Error(e)
    })
}

export default function loadPoll(config: IConfig): void {
  const { elementId, question, options, pollId } = config
  

  const formQuestion = document.createElement('p');
  formQuestion.innerText = question;

  const optionsContainer = document.createElement('div');
  optionsContainer.setAttribute('class', CLASSNAME_MAPPINGS.OPTIONS);

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
  submitButton.setAttribute('class', CLASSNAME_MAPPINGS.BUTTON);
  submitButton.innerText = 'Submit';

  const form = document.createElement('form');
  form.addEventListener('submit', (e) => handleSubmit(e, pollId, options.id, config));
  form.setAttribute('class', CLASSNAME_MAPPINGS.FORM);
  form.setAttribute('id', CLASSNAME_MAPPINGS.FORM);
  form.appendChild(formQuestion);
  form.appendChild(optionsContainer);
  form.appendChild(submitButton);

  const container = document.getElementById(elementId);
  if (container) {
    container.appendChild(form);
  }
}
