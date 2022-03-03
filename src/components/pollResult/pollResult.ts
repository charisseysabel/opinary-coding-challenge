import LocalStorage from "../../services/localStorage";
import { IConfig } from "../../types";

export default function showResult(): void {
  const config: IConfig = require(`../../configs/${__CONFIG}`);

  if (!config) {
    throw new Error(`Config not found.`);
  }

  const { elementId, question, options, pollId } = config
  const localStorageClient = new LocalStorage({ key: pollId })
  const results = localStorageClient.getPolls();

  const resultContainer = document.createElement('div');

  options.values.forEach((option, index) => {
    const id = `op-radio-${index}`
    
    const question = document.createElement('span');
    question.innerText = option;
    
    const votes = document.createElement('span');
    votes.innerText = `${results[id]} votes`;

    const inputText = document.createElement('p');
    inputText.setAttribute('class', 'op-poll__pollResultItem');
    inputText.appendChild(question);
    inputText.appendChild(votes);

    resultContainer.appendChild(inputText);
  });

  const container = document.getElementById(elementId);
  if (container) {
    container.appendChild(resultContainer);
  }
}
