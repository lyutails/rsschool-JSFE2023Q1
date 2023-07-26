import { engineURL, quidditchURL } from '../types/constants';
import { StatusCodes } from '../types/enums';
import { Witch } from '../components/reused/witch';
import { PageLimitResponse, WitchBroom } from '../types/interfaces';
import { Observer } from '../observer';

export const stopWitchObserver = new Observer();
export const continueMoveObserver = new Observer();

export const getAllWitches = async (
  elements: PageLimitResponse[]
): Promise<WitchBroom[]> => {
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
};

export const getParticularWitch = async (id: number): Promise<WitchBroom> => {
  return fetch(`${quidditchURL}/${id}`, {
    method: 'GET',
  }).then((response) => response.json());
};

export const createWitch = async (
  name: string,
  color: string
): Promise<void> => {
  await fetch(`${quidditchURL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      color,
    }),
  });
};

export const updateWitch = async (
  name: string,
  color: string,
  id: number
): Promise<Response> => {
  return fetch(`${quidditchURL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      color,
    }),
  });
};

export const stopEngine = async (id: number): Promise<void> => {
  await fetch(`${engineURL}?&id=${id}&status=stopped`, {
    method: 'PATCH',
  }).then((response) => response.json());
};

export const flyMode = async (id: number, witch: Witch): Promise<void> => {
  fetch(`${engineURL}?&id=${id}&status=drive`, {
    method: 'PATCH',
  })
    .then((response) => {
      // if (response.status === +StatusCodes.STOP) {
      //   witch.node.style.animationPlayState = 'paused';
      //   stopEngine(id);
      // }
      return response.json();
    })
    .catch(() => {
      witch.node.style.animationPlayState = 'paused';
      stopEngine(id);
    });
};

export const startEngine = async (
  id: number
): Promise<{ velocity: number; distance: number }> => {
  return fetch(`${engineURL}?&id=${id}&status=started`, {
    method: 'PATCH',
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};

export const flyAllWitches = async (
  serverWitches: WitchBroom[],
  index: number,
  witch: Witch
): Promise<void> => {
  Promise.all(serverWitches)
    .then((raceWitches: WitchBroom[]) =>
      raceWitches.forEach(() => {
        const getTime = async (): Promise<void> => {
          const speed = await startEngine(index).then(
            (response) => response.velocity
          );
          witch.node.style.animationDuration = `${
            (+window.innerWidth * 0.8) / +speed
          }s`;
        };
        getTime();
      })
    )
    .then(() => {
      witch.node.style.animationName = 'witch_fly_anim';
      witch.node.style.animationIterationCount = '1';
      witch.node.style.animationFillMode = 'forwards';
      witch.node.style.animationTimingFunction = 'ease-in-out';
      flyMode(index, witch);
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
  const totalWitches = fetch(`${quidditchURL}?_page=1&_limit=1`);
  if (!totalWitches) {
    throw new Error('no witches found');
  }
  const witchesCount = totalWitches.then((response) => {
    return response.headers.get('X-Total-Count') || '0';
  });
  return witchesCount;
};
