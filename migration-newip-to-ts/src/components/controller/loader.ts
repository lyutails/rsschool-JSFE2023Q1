import { EndpointOptions, Options, Endpoint, ErrorCodes, callbackFunction } from '../../types';

class Loader {
  constructor(private baseLink: string, private options: Options) {}

  public getResp(
    { endpoint, options = {} }: EndpointOptions,
    callback = () => {
      console.error('No callback for GET response');
    }
  ) {
    this.load('GET', endpoint, callback, options);
  }

  public errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === ErrorCodes.unauthorized || res.status === ErrorCodes.notFound)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  public makeUrl(options: Options, endpoint: Endpoint) {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  public load<T>(method: string, endpoint: Endpoint, callback: callbackFunction<T>, options = {}): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data: T) => callback(data))
      .catch((err: Error) => console.error(err));
  }
}

export default Loader;
