import { UserAtom } from '@/shared/state/type';
import api from '../api';

export const getUser = async (): Promise<UserAtom> => {

  try {

    const response = await api.get('productsWithLimit?limit=16');

    let data: UserAtom = {data: [], error: false, loading: false};

    data.data = [
      {
        img: "https://b2b.kerba.az/assets/uploads/images/2a8ac1a6834353b4f7d5175a19e0e2bd.jpeg",
        title: "ACDELCO",
        category: "acdelco"
      },
      {
        img: "https://b2b.kerba.az/assets/uploads/images/2a8ac1a6834353b4f7d5175a19e0e2bd.jpeg",
        title: "ACDELCO ACDELCO ACDELCO ACDELCO ACDELCO ACDELCO ACDELCO ACDELCO",
        category: "acdelco"
      },
      {
        img: "https://b2b.kerba.az/assets/uploads/images/2a8ac1a6834353b4f7d5175a19e0e2bd.jpeg",
        title: "ACDELCO",
        category: "acdelco"
      },
      {
        img: "https://b2b.kerba.az/assets/uploads/images/2a8ac1a6834353b4f7d5175a19e0e2bd.jpeg",
        title: "ACDELCO",
        category: "acdelco"
      },
      {
        img: "https://b2b.kerba.az/assets/uploads/images/2a8ac1a6834353b4f7d5175a19e0e2bd.jpeg",
        title: "ACDELCO",
        category: "acdelco"
      },
      {
        img: "https://b2b.kerba.az/assets/uploads/images/2a8ac1a6834353b4f7d5175a19e0e2bd.jpeg",
        title: "ACDELCO ACDELCO ACDELCO ACDELCO",
        category: "acdelco"
      },
      {
        img: "https://b2b.kerba.az/assets/uploads/images/2a8ac1a6834353b4f7d5175a19e0e2bd.jpeg",
        title: "ACDELCO",
        category: "acdelco"
      },
      {
        img: "https://b2b.kerba.az/assets/uploads/images/2a8ac1a6834353b4f7d5175a19e0e2bd.jpeg",
        title: "ACDELCO",
        category: "acdelco"
      },
    ]

    return data;
  } catch (error) {
    console.error('Error fetching:', error);
    return {data: [], error: true, loading: false};
  }
};

