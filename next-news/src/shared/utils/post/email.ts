import { InfoAtom } from '@/shared/state/type';
import api from '../api';

export const postGetDailyFood = async (name: string, email: string): Promise<InfoAtom> => {

  try {

    const response = await api.get('/todos');
    let data: InfoAtom = {data: null, error: false, loading: false};

    return data;
  } catch (error) {
    console.error('Error fetching:', error);
    return {data: null, error: true, loading: false};
  }

};

