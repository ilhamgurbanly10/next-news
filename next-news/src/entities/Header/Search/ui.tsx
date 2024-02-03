import React from 'react';
import { Search } from '@/shared/icons';
import Input from '@/shared/ui/Input';
import useModel from './model';
import { Props } from './type';

export const UI: React.FC<Props> = ({ className, rounded =  true })  => {

  const {value, setValue, onFinish} = useModel();

  return (
    <div className={`search ${className ? className : ''}`}>

      <form onSubmit={(e) => { e.preventDefault(); onFinish(); }}>
        <Input 
          value={value}
          setValue={setValue}
          placeholder="Search Here..."
          icon={<Search />}
          inputClassName={!rounded ? 'rounded-none' : ''}
          iconPosition="right"
        />
      </form>

    </div>
  );
};

