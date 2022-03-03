const KEY = 'op-poll';

export interface ILocalStorageOptions { key: string }

interface ILocalStorageResult { [key: string]: number }


export default class LocalStorage {
  private readonly localStorage: Storage = window.localStorage
  private key: string

  constructor(options: ILocalStorageOptions) {
    this.key = options.key
  }

  public getPolls = (): ILocalStorageResult => {
    const pollObj = this.localStorage.getItem(KEY);
    const polls = pollObj ? JSON.parse(pollObj) : {}

    return polls[this.key] ?? {};
  }

  public savePolls = (value: string) => {
    console.log('values', value);
    const currentValues = this.getPolls();
    
    if (currentValues[value]) {
      currentValues[value]++;
    } else {
      currentValues[value] = 1
    }

    this.localStorage.setItem(KEY, JSON.stringify({[this.key]: currentValues}))
  }
}
