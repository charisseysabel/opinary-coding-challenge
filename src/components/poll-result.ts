import { CLASS_PREFIX } from "../constants";
import LocalStorage from "../services/local-storage";
import { IConfig } from "../types";

export default function showResult(config: IConfig): void {
  const { question, options, pollId } = config
  const localStorageClient = new LocalStorage({ key: pollId })
  const results = localStorageClient.getPolls();

  const resultContainer = document.createElement('div');

  const questionContainer = document.createElement('p');
  questionContainer.innerText = `Results of "${question}"`;

  resultContainer.appendChild(questionContainer);

  options.values.forEach((option, index) => {
    const id = `op-radio-${index}`
    
    const optionLabel = document.createElement('span');
    optionLabel.innerText = option;
    
    const votes = document.createElement('span');
    votes.setAttribute('class', `${CLASS_PREFIX}__total`)
    votes.innerText = `${results[id] ?? '0'} votes`;

    const inputText = document.createElement('p');
    inputText.setAttribute('class', `${CLASS_PREFIX}__pollResultItem`);
    inputText.appendChild(optionLabel);
    inputText.appendChild(votes);

    resultContainer.appendChild(inputText);
  });

  const container = document.getElementById('poll');
  if (container) {
    container.replaceChildren(resultContainer);
  }
}
