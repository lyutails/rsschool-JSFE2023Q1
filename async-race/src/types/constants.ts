import { store } from '../store';
import { Path } from './enums';
import { PageLimitResponse } from './interfaces';

export const baseURL = 'http://127.0.0.1:3000';
export const quidditchURL = `${baseURL}${Path.garage}`;
export const winnersURL = `${baseURL}${Path.winners}`;
export const engineURL = `${baseURL}${Path.engine}`;

const witchesPerPage = '7';

export const forPaginationUrl: PageLimitResponse[] = [
  { key: '_page', value: `${store.currentPage}` },
  { key: '_limit', value: witchesPerPage },
];
