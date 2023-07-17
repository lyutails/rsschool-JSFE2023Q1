import { Subscriber } from "./types/types";

export class Observer<T> {
  public observers: Subscriber<T>[] = [];

  public subscribe(observerFunction: Subscriber<T>): void {
    this.observers.push(observerFunction);
  }

  public unsubscribe(observerFunction: Subscriber<T>): void {
    this.observers = this.observers.filter((fn) => fn !== observerFunction);
  }

  public notify(data: T): void {
    this.observers.forEach((observer) => {
      observer(data);
    });
  }
}
