import { selector } from 'recoil';
import { userState, } from './atoms';
import {User} from './type';

export const userSelector = selector({
  key: 'userSelector',
  get: ({ get }) => {
    return get<User>(userState);
  },
});

