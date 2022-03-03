import loadForm from './components/form';
import './styles.css';
import { IConfig } from './types';

function app(): void {
  const config: IConfig = require(`../configs/${__CONFIG}`);
  const { pollId, question, options } = config

  if (!pollId || !question) {
    throw new Error('pollId or question cannot be empty. Please check your config');
  }

  if (!options.values) {
    throw new Error('No options values found. Please check your config');
  }

  const booleanMap: boolean[] = options.values.map(option => !!option);
  const containsFalsyValues = booleanMap.some((item) => !item);

  if (containsFalsyValues) {
    throw new Error('Some option values are invalid. Please check your config');
  }

  if (!options.id) {
    throw new Error('Please set an id property in the options object.');
  }

  loadForm(config);
}

app();