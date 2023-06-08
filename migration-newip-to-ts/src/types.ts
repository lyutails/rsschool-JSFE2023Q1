enum Status {
    OK = 'ok',
    ERROR = 'error',
}

export type Source = {
    id: string;
    name: string;
    description?: string;
    url?: string;
    category?: string;
    language?: string;
    country?: string;
};

export interface SourcesRequest {
    apiKey: string;
    category?: string;
    language?: string;
    country?: string;
}

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
