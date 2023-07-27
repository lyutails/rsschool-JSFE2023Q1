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

// const sort: GetWinners = { `${id}`, `${wins}`, `${time}` };

// export const forWinnersUrl: PageLimitResponse[] = [
//   { key: '_page', value: `${store.currentWinnersPage}` },
//   { key: '_limit', value: witchesPerPage },
//   { key: '_sort', value: sort },
//   { key: '_order', value: order }
// ];
