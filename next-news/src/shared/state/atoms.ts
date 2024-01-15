import { atom } from 'recoil';
import {UserAtom} from './type';

export const userState = atom<UserAtom>({
  key: 'userState',
  default: {
    error: false,
    data: []
  },
});
