import { useState, useEffect, useRef} from 'react';
import { ModelReturnProps } from './type';

const useModel = (): ModelReturnProps  => {

  const [show, setShow] = useState<boolean>(false);
  const header = useRef<HTMLElement | null>(null);
  const height = useRef<number>(0);

  const getHeaderHeight = (): number =>
    parseFloat(window.getComputedStyle(header.current, null)?.getPropertyValue("height"));

  const toggleFixedHeader = (): void => {
    const h = height.current || 200;
    setShow(Boolean(document?.documentElement?.scrollTop > h))
  }

  useEffect(() => {
    header.current = document.querySelector('header'); 
    height.current = getHeaderHeight();
    document.addEventListener('scroll', toggleFixedHeader);
    toggleFixedHeader();
  }, [])

  return {
    show
  };

};

export default useModel;

