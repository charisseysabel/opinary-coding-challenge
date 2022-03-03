import LocalStorage from "../../services/localStorage";
import { IConfig } from "../../types";

export default function showResult(config: IConfig): void {
  const { elementId, question, options, pollId } = config
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
    votes.innerText = `${results[id]} votes`;

    const inputText = document.createElement('p');
    inputText.setAttribute('class', 'op-poll__pollResultItem');
    inputText.appendChild(optionLabel);
    inputText.appendChild(votes);

    resultContainer.appendChild(inputText);
  });

  const container = document.getElementById(elementId);
  if (container) {
    container.replaceChildren(resultContainer);
  }
}
