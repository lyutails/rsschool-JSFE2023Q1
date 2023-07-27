import { engineURL, quidditchURL, winnersURL } from '../types/constants';
import { Witch } from '../components/reused/witch';
import { PageLimitResponse, WitchBroom } from '../types/interfaces';
import { Observer } from '../observer';
import { enableTrackButtonsObserver } from '../components/reused/track_buttons';
import { RaceButtons } from '../components/features/race_buttons';
import { ControlWidgetCreate } from '../components/controls/control_widget_create';
import { ControlWidgetUpdate } from '../components/controls/control_widget_update';
import { RacePagination } from '../components/features/race_pagination';

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
  })
    .then((response) => response.json())
    .catch(() => {
      throw new Error('smth went wrong here');
    });
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
  }).then((response) => response.json())
  .catch(() => {
    throw new Error('smth went wrong here');
  });
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
      RacePagination.paginationButtonBeginning.enableButton();
      RacePagination.paginationButtonLeft.enableButton();
      RacePagination.paginationButtonRight.enableButton();
      RacePagination.paginationButtonEnd.enableButton();
      RaceButtons.resetButton.enableButton();
      RaceButtons.moreWitchesButton.enableButton();
      ControlWidgetCreate.controlButton.enableButton();
      ControlWidgetUpdate.controlButton.enableButton();
      enableTrackButtonsObserver.notify('lalala');
      RaceButtons.raceButton.enableButton();
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
  const totalWitches = fetch(`${quidditchURL}?_page=1&_limit=1`);
  if (!totalWitches) {
    throw new Error('no witches found');
  }
  const witchesCount = totalWitches.then((response) => {
    return response.headers.get('X-Total-Count') || '0';
  });
  return witchesCount;
};

export const flyAllWitches = async (
  serverWitches: WitchBroom[],
  index: number,
  witch: Witch
): Promise<void> => {
  Promise.all(serverWitches).then(() => {
    const getTime = async (): Promise<void> => {
      const speed = await startEngine(index).then(
        (response) => response.velocity
      );
      witch.node.style.animationDuration = `${
        (+window.innerWidth * 0.8) / +speed
      }s`;
    };
    getTime();
    witch.node.style.animationName = 'witch_fly_anim';
    witch.node.style.animationIterationCount = '1';
    witch.node.style.animationFillMode = 'forwards';
    witch.node.style.animationTimingFunction = 'ease-in-out';
    flyMode(index, witch);
  })
  .catch(() => {
    throw new Error('smth went wrong here');
  });
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
  const totalWitches = fetch(`${winnersURL}?_page=1&_limit=1`);
  if (!totalWitches) {
    throw new Error('no witches found');
  }
  const witchesCount = totalWitches.then((response) => {
    return response.headers.get('X-Total-Count') || '0';
  });
  return witchesCount;
};
