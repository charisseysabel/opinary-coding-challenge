import loadPoll from './components/poll/poll';
import './styles.css';
import { IConfig } from './types';

function app(): void {
  const config: IConfig = require(`./configs/${__CONFIG}`);

  if (!config) {
    throw new Error(`Config not found.`);
  }

  loadPoll(config);
}

app();