import {Hook, UserAtom} from './type'
import { useRecoilState } from 'recoil';
import { userState } from './atoms';
import { getUser } from '@/shared/utils/get/user';

const useRecoil = (): Hook => {

  // atoms
  const [user, setUser] = useRecoilState<UserAtom>(userState);

  const fetchUser = async () => {
    setUser({data: [], error: false, loading: true});
    let data: UserAtom = {data: [], error: false, loading: true};
    data = await getUser();
    setUser({data: data.data, error: data.error, loading: data.loading});
  }

  return { user, fetchUser };

};

export default useRecoil;
