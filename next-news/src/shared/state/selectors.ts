import { selector } from 'recoil';
import { userState, infoState } from './atoms';
import {UserAtom, InfoAtom} from './type';

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

