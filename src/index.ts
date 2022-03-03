import loadPoll from './components/poll/poll';
import { IConfig } from './types';

const defaultConfig: IConfig = {
  elementId: '',
  question: '',
  options: []
}

loadPoll(window);