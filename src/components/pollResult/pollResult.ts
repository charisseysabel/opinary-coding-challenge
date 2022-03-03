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
    
    const inputText = document.createElement('p');
    inputText.innerText = `${option}: ${results[id]}`
  
    
    resultContainer.appendChild(inputText);
  });

  const container = document.getElementById(elementId);
  if (container) {
    container.appendChild(resultContainer);
  }
}
