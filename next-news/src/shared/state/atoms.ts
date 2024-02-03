import { atom } from 'recoil';
import {UserAtom, InfoAtom, TopCategories, WeeklyBestRecipes, Hero} from './type';

export const sloganState = atom<string>({
  key: 'sloganState',
  default: 'hi slogan'
});

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
        src: "https://themegenix.net/html/zaira/assets/img/images/categories_img06.png",
        label: "pizza",
        href: '/'
      }
    ],
    loading: false
  },
});

export const weeklyBestRecipesState = atom<WeeklyBestRecipes>({
  key: 'weeklyBestRecipesState',
  default: {
    error: false,
    data: [
      {
        id: 1,
        date: '27 August, 2024',
        src: "https://themegenix.net/html/zaira/assets/img/blog/recipe_img01.jpg",
        label: "BREAKFAST",
        title: "How To Design An Effective User Onboarding Flow",
        user_name: "ADMIN",
        href: "/"
      },
      {
        id: 2,
        date: '27 August, 2024',
        src: "https://themegenix.net/html/zaira/assets/img/blog/recipe_img02.jpg",
        label: "LUNCH",
        title: "Exploring The Potential Of Web Workers For Multithreading",
        user_name: "ADMIN",
        href: "/"
      },
      {
        id: 3,
        date: '27 August, 2024',
        src: "https://themegenix.net/html/zaira/assets/img/blog/recipe_img03.jpg",
        label: "DESSERT",
        title: "Favorite Browned Butter Chocolate Cookies Daily Breakfast",
        user_name: "ADMIN",
        href: "/"
      },
      {
        id: 4,
        date: '27 August, 2024',
        src: "https://themegenix.net/html/zaira/assets/img/blog/recipe_img04.jpg",
        label: "APPETIZER",
        title: "The Potentially Dangerous Non Sibility Of Cookie Notices",
        user_name: "ADMIN",
        href: "/"
      }
    ],
    loading: false
  },
});

export const heroState = atom<Hero>({
  key: 'heroState',
  default: {
    error: false,
    data: [
      {
        id: 1,
        date: '27 August, 2024',
        src: "https://themegenix.net/html/zaira/assets/img/blog/recipe_img01.jpg",
        label: "BREAKFAST",
        title: "How To Design An Effective User Onboarding Flow",
        user_name: "ADMIN",
        href: "/"
      },
      {
        id: 2,
        date: '27 August, 2024',
        src: "https://themegenix.net/html/zaira/assets/img/blog/recipe_img02.jpg",
        label: "LUNCH",
        title: "How To Design An Effective User Onboarding Flow",
        user_name: "ADMIN",
        href: "/"
      },
      {
        id: 3,
        date: '27 August, 2024',
        src: "https://themegenix.net/html/zaira/assets/img/blog/recipe_img03.jpg",
        label: "DESSERT",
        title: "How To Design An Effective User Onboarding Flow",
        user_name: "ADMIN",
        href: "/"
      },
      {
        id: 4,
        date: '27 August, 2024',
        src: "https://themegenix.net/html/zaira/assets/img/blog/recipe_img04.jpg",
        label: "APPETIZER",
        title: "How To Design An Effective User Onboarding Flow",
        user_name: "ADMIN",
        href: "/"
      },
      {
        id: 5,
        date: '27 August, 2024',
        src: "https://themegenix.net/html/zaira/assets/img/blog/recipe_img01.jpg",
        label: "BREAKFAST",
        title: "How To Design An Effective User Onboarding Flow",
        user_name: "ADMIN",
        href: "/"
      },
      {
        id: 6,
        date: '27 August, 2024',
        src: "https://themegenix.net/html/zaira/assets/img/blog/recipe_img02.jpg",
        label: "LUNCH",
        title: "How To Design An Effective User Onboarding Flow",
        user_name: "ADMIN",
        href: "/"
      },
      {
        id: 7,
        date: '27 August, 2024',
        src: "https://themegenix.net/html/zaira/assets/img/blog/recipe_img03.jpg",
        label: "DESSERT",
        title: "How To Design An Effective User Onboarding Flow",
        user_name: "ADMIN",
        href: "/"
      },
      {
        id: 8,
        date: '27 August, 2024',
        src: "https://themegenix.net/html/zaira/assets/img/blog/recipe_img04.jpg",
        label: "APPETIZER",
        title: "How To Design An Effective User Onboarding Flow",
        user_name: "ADMIN",
        href: "/"
      }
    ],
    loading: false
  },
});
