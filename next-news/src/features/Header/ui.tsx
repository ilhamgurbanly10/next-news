import React from 'react';
import { Props } from './type';
import useModel from './model';
import Top from './Top';
import Offcanvas from '@/shared/ui/Offcanvas';
import { Bars } from '@/shared/icons';
import Container from '@/shared/ui/Container';
import OffcanvasContent from './OffcanvasContent';

export const UI: React.FC<Props> = ({  })  => {

  const { showOffcanvas, setShowOffcanvas } = useModel();

  return (
    <header className="header">

      <Top />

      <div className='border-b'>
        <Container className='hidden lg:flex items-center justify-between'>
          <div>
            <button onClick={() => { setShowOffcanvas(true); }} className='text-4xl bg-white px-6 py-7 border-r'><Bars color="#F4796C"/></button>
          </div>
          <div></div>
          <div></div>
        </Container>
      </div>

      <Offcanvas show={showOffcanvas} setShow={setShowOffcanvas}>
        <OffcanvasContent setShow={setShowOffcanvas} />
      </Offcanvas>
    
    </header>
  );
};

