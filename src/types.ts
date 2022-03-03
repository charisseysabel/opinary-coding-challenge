export interface IPollOptions {
  id: string;
  values: string[]
}

export interface IConfig {
  elementId: string;
  pollId: string;
  question: string;
  options: IPollOptions
}