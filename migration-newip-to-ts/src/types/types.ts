enum Status {
  ok = 'ok',
  error = 'error',
}

export enum ErrorCodes {
  unauthorized = 401,
  notFound = 404,
}

export type Options = {
  [key: string]: string | number;
};

export type Endpoint = string;

export type EndpointOptions = {
  endpoint: Endpoint;
  options?: Options;
};

export type SourceReadonly = Readonly<Source>;

export type Source = {
  id: string;
  name: string;
  description?: string;
  url?: string;
  category?: string;
  language?: string;
  country?: string;
};

// type Picked = Pick<Source, 'description' | 'category'>;

export interface SourcesResponse {
  status: Status;
  sources: Source[];
}

export interface NewsItem {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export interface HeadlinesResponse {
  status: Status;
  totalResults: number;
  articles: NewsItem[];
}

export type callbackFunction<T> = (data?: T) => void;
