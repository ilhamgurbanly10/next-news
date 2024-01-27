import { atom } from 'recoil';
import {UserAtom, InfoAtom, TopCategories} from './type';

export const loadingState = atom<boolean>({
  key: 'loadingState',
  default: false
});

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

export const topCategoriesState = atom<TopCategories>({
  key: 'topCategoriesState',
  default: {
    error: false,
    data: [
      {
        src: "https://themegenix.net/html/zaira/assets/img/images/categories_img01.png",
        label: "breakfast",
        href: '/'
      },
      {
        src: "https://themegenix.net/html/zaira/assets/img/images/categories_img02.png",
        label: "dessert",
        href: '/'
      },
      {
        src: "https://themegenix.net/html/zaira/assets/img/images/categories_img03.png",
        label: "lunch",
        href: '/'
      },
      {
        src: "https://themegenix.net/html/zaira/assets/img/images/categories_img04.png",
        label: "appetizer",
        href: '/'
      },
      {
        src: "https://themegenix.net/html/zaira/assets/img/images/categories_img05.png",
        label: "dinner",
        href: '/'
      },
      {
        src: "https://themegenix.net/html/zaira/assets/img/images/categories_img05.png",
        label: "pizza",
        href: '/'
      }
    ],
    loading: false
  },
});
