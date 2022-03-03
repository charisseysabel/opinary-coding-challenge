export interface IPollOptions {
  id: string;
  values: string[]
}

export interface IConfig {
  pollId: string;
  question: string;
  options: IPollOptions
}