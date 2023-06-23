export interface LeavesPics {
  [key: string]: string;
}

export type Subscriber<T> = (data: T) => void;
// (() => void)[]

export interface LevelsDescription {
  helpTitle: string;
  selectorName: string;
  doThis: string;
  selector: string;
  syntax: string;
  help: string;
  examples: string[];
  boardMarkup: string;
}
