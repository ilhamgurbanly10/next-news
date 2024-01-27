import { selector } from 'recoil';
import { userState, infoState, loadingState } from './atoms';
import {UserAtom, InfoAtom} from './type';

export const loadingSelector = selector({
  key: 'loadingSelector',
  get: ({ get }) => {
    return get<boolean>(loadingState);
  },
});

export const userSelector = selector({
  key: 'userSelector',
  get: ({ get }) => {
    return get<UserAtom>(userState);
  },
});

export const infoSelector = selector({
  key: 'infoSelector',
  get: ({ get }) => {
    return get<InfoAtom>(infoState);
  },
});

