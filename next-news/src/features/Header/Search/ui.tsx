import React from 'react';
import { Search } from '@/shared/icons';
import Input from '@/shared/ui/Input';
import useModel from './model';

export const UI: React.FC = ({  })  => {

  const {value, setValue, onFinish} = useModel();

  return (
    <div className="search">

      <form onSubmit={(e) => { e.preventDefault(); onFinish(); }}>
        <Input 
          value={value}
          setValue={setValue}
          placeholder="Search Here..."
          icon={<Search />}
          iconPosition="right"
        />
      </form>

    </div>
  );
};

