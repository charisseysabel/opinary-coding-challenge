import loadPoll from './components/poll/poll';
import showResult from './components/pollResult/pollResult';
import './styles.css';
import { IConfig } from './types';

function app() {
  const config: IConfig = require(`./configs/${__CONFIG}`);

  if (!config) {
    throw new Error(`Config not found.`);
  }

  loadPoll(config);
  showResult(config);
}

app();