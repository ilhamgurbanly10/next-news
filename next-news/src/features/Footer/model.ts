import { ModelReturnProps } from './type';

const useModel = (): ModelReturnProps  => {

  const greeting = "hello";

  return {
    greeting
  };

};

export default useModel;

