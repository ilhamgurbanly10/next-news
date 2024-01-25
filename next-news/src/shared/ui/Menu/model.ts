import { useState} from 'react';
import { ModelReturnProps } from './type';

const useModel = (): ModelReturnProps  => {

  const [shownDropdowns, setShownDropdowns] = useState<number[] | string[]>([]);
  const [shownInnerDropdowns, setShownInnerDropdowns] = useState<number[] | string[]>([]);

  const isShown = (key: number | string): boolean => shownDropdowns?.some((item: number | string) => { return item == key})

  const show = (key: number | string, showOnlyOne: boolean): void => {
    let arr: any[] = isShown(key) ? [...shownDropdowns?.filter((item) => { return item != key})] : showOnlyOne ? [key] : [...shownDropdowns, key];
    setShownDropdowns(arr);
    if (showOnlyOne) setShownInnerDropdowns([]);
  }

  const isInnerShown = (key: number | string): boolean => shownInnerDropdowns?.some((item: number | string) => { return item == key})

  const showInner = (key: number | string, showOnlyOne: boolean): void => {
    let arr: any[] = isInnerShown(key) ? [...shownInnerDropdowns?.filter((item) => { return item != key})] : showOnlyOne ? [key] : [...shownInnerDropdowns, key];
    setShownInnerDropdowns(arr);
  }

  return {
    isShown,
    show,
    isInnerShown,
    showInner
  };

};

export default useModel;

