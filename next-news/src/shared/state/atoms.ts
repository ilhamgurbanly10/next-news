import { atom } from 'recoil';
import {UserAtom, InfoAtom} from './type';

export const userState = atom<UserAtom>({
  key: 'userState',
  default: {
    error: false,
    data: [],
    loading: false
  },
});

export const infoState = atom<InfoAtom>({
  key: 'infoState',
  default: {
    error: false,
    data: null,
    loading: false
  },
});
