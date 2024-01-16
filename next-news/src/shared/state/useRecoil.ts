import {Hook, UserAtom, InfoAtom} from './type'
import { useRecoilState } from 'recoil';
import { userState, infoState } from './atoms';
import { getUser } from '@/shared/utils/get/user';
import { getInfo } from '../utils/get/general';

const useRecoil = (): Hook => {

  // atoms
  const [user, setUser] = useRecoilState<UserAtom>(userState);
  const [info, setInfo] = useRecoilState<InfoAtom>(infoState);

  // fetching
  const fetchUser = async () => {
    setUser({data: [], error: false, loading: true});
    let data: UserAtom = {data: [], error: false, loading: true};
    data = await getUser();
    setUser({data: data.data, error: data.error, loading: data.loading});
  }

  const fetchInfo = async () => {
    let data: InfoAtom = {data: null, error: false, loading: true};
    setInfo(data);
    data = await getInfo();
    setInfo({data: data.data, error: data.error, loading: data.loading});
  }

  return { user, fetchUser, info, fetchInfo };

};

export default useRecoil;
