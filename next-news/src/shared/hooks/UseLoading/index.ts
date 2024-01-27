import { Props } from './type';
import { useRecoilState } from 'recoil';
import { loadingState } from '@/shared/state/atoms';

export const Hook = (): Props  => {

  const [loader, setLoader] = useRecoilState<boolean>(loadingState);

  const loading = {
    start: () => { setLoader(true); },
    stop: () => { setLoader(false); },
    state: loader
  }
  
  return {
    loading
  };

};


