import { InfoAtom } from '@/shared/state/type';
import api from '../api';

export const getInfo = async (): Promise<InfoAtom> => {

  try {

    const response = await api.get('/todos');

    let data: InfoAtom = {data: null, error: false, loading: false};

    data.data = {
        title: 'The Argument In Favor Of Using Filler Text Goes Something Like This: If You Use Any Real Content In The Consulting Process Anytime You Reach.',
        images: ['https://themegenix.net/html/zaira/assets/img/blog/hr_post01.jpg', 'https://themegenix.net/html/zaira/assets/img/blog/hr_post02.jpg', 'https://themegenix.net/html/zaira/assets/img/blog/hr_post03.jpg', 'https://themegenix.net/html/zaira/assets/img/blog/hr_post01.jpg', 'https://themegenix.net/html/zaira/assets/img/blog/hr_post02.jpg', 'https://themegenix.net/html/zaira/assets/img/blog/hr_post03.jpg']
    }

    return data;
  } catch (error) {
    console.error('Error fetching:', error);
    return {data: null, error: true, loading: false};
  }
};

