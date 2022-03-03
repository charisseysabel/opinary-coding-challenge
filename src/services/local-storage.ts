const KEY = 'op-poll';

export interface ILocalStorageOptions { key: string }
export interface ILocalStorage {
  getPolls: () => ILocalStorageResult;
  savePolls: (v: string) => Promise<void>;
}

interface ILocalStorageResult { [key: string]: number }


export default class LocalStorage implements ILocalStorage {
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

  public savePolls = (value: string): Promise<void> => {
    const currentValues = this.getPolls();
    
    if (currentValues[value]) {
      currentValues[value]++;
    } else {
      currentValues[value] = 1
    }

    return new Promise((resolve, reject) => {
      try {
        this.localStorage.setItem(KEY, JSON.stringify({[this.key]: currentValues}));
        resolve();
      } catch (error) {
        reject(`Error saving response: ${error}`);
      }
    })
  }
}