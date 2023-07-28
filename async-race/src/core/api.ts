import { engineURL, quidditchURL, winnersURL } from '../types/constants';
import { PageLimitResponse, WitchBroom } from '../types/interfaces';
import { Observer } from '../observer';

export const stopWitchObserver = new Observer();
export const continueMoveObserver = new Observer();

export const getAllWitches = async (
  elements: PageLimitResponse[]
): Promise<WitchBroom[]> => {
  try {
    const pageWitchLimit = (items: PageLimitResponse[]): string =>
      items
        .map((item: PageLimitResponse): string => `${item.key}=${item.value}`)
        .join('&');
    const response = await fetch(`${quidditchURL}?${pageWitchLimit(elements)}`);
    if (!response.ok) {
      throw new Error('some error happened on the way');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('smth wrong went with getting all witches');
  }
};

export const getParticularWitch = async (id: number): Promise<WitchBroom> => {
  try {
    return fetch(`${quidditchURL}/${id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .catch(() => {
        throw new Error('smth went wrong here');
      });
  } catch (error) {
    throw new Error('smth wrong went with getting particular witch');
  }
};

export const createWitch = async (
  name: string,
  color: string
): Promise<void> => {
  try {
    await fetch(`${quidditchURL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        color,
      }),
    });
  } catch (error) {
    throw new Error('smth wrong went with creating witch');
  }
};

export const updateWitch = async (
  name: string,
  color: string,
  id: number
): Promise<Response> => {
  try {
    return fetch(`${quidditchURL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        color,
      }),
    });
  } catch (error) {
    throw new Error('smth wrong went with updating witch');
  }
};

export const stopEngine = async (id: number): Promise<void> => {
  await fetch(`${engineURL}?&id=${id}&status=stopped`, {
    method: 'PATCH',
  })
    .then((response) => response.json())
    .catch(() => {
      throw new Error('smth went wrong here');
    });
};

export async function flyMode (id: number): Promise<any> {
  const response = fetch(`${engineURL}?id=${id}&status=drive`, {
    method: 'PATCH',
  })
  const json = (await response).json();
  return json;
};

export const startEngine = async (
  id: number
): Promise<{ velocity: number; distance: number }> => {
  return fetch(`${engineURL}?id=${id}&status=started`, {
    method: 'PATCH',
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch(() => {
      throw new Error('smth went wrong here');
    });
};

export const deleteWitch = async (id: number): Promise<void> => {
  const response = await fetch(`${quidditchURL}/${id}`, {
    method: 'DELETE',
  });
  const witch = await response.json();
  return witch;
};

export const totalWitchesCount = async (): Promise<string | null> => {
  const totalWitches = fetch(`${quidditchURL}?&_page=1&_limit=7`);
  if (!totalWitches) {
    throw new Error('no witches found');
  }
  const witchesCount = totalWitches.then((response) => {
    return response.headers.get('X-Total-Count') || '0';
  });
  return witchesCount;
};

export const getWinners = async (
  elements: PageLimitResponse[]
): Promise<void> => {
  const pageWitchLimit = (items: PageLimitResponse[]): string =>
    items
      .map((item: PageLimitResponse): string => `${item.key}=${item.value}`)
      .join('&');
  const response = await fetch(`${winnersURL}?${pageWitchLimit(elements)}`, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('no winners found to get');
  }
  const data = await response.json();
  return data;
};

export const createWinner = async (): Promise<void> => {
  const response = await fetch(`${winnersURL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    throw new Error('no winner found for create');
  }
  const data = await response.json();
  return data;
};

export const deleteWinner = async (id: number): Promise<void> => {
  const response = await fetch(`${winnersURL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('no wanted winner found for delete');
  }
  const data = await response.json();
  return data;
};

export const updateWinner = async (id: number): Promise<void> => {
  const response = await fetch(`${winnersURL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) {
    throw new Error('no winner found to update');
  }
  const data = await response.json();
  return data;
};

export const totalWinnersCount = async (): Promise<string | null> => {
  const totalWitches = fetch(`${winnersURL}?&_page=1&_limit=10`);
  if (!totalWitches) {
    throw new Error('no witches found');
  }
  const witchesCount = totalWitches.then((response) => {
    return response.headers.get('X-Total-Count') || '0';
  });
  return witchesCount;
};
