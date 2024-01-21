import React from 'react';
import { Props } from './type';
import useModel from './model';
import Top from './Top';
import Offcanvas from '@/shared/ui/Offcanvas';
import { Bars } from '@/shared/icons';
import Container from '@/shared/ui/Container';
import OffcanvasContent from './OffcanvasContent';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import Search from './Search';

export const UI: React.FC<Props> = ({  })  => {

  const { showOffcanvas, setShowOffcanvas } = useModel();

  return (
    <header className="header">

      <Top />

      <div className='border-b'>

        <Container className='hidden lg:flex items-center justify-between'>

          <div className='flex items-center'>
            <button onClick={() => { setShowOffcanvas(true); }} className='text-4xl bg-white px-6 py-7 border-r'><Bars color="#F4796C"/></button>
            <Navbar className='ml-8'/>
          </div>

          <div>
            <Link href="/">
              <Image 
                className="brand" 
                width={171} 
                height={50} 
                alt={'brand'} 
                src="https://themegenix.net/html/zaira/assets/img/logo/logo.png" 
              />
            </Link>
          </div>

          <div className="mr-8">
            <Search />
          </div>

        </Container>

      </div>

      <Offcanvas show={showOffcanvas} setShow={setShowOffcanvas} className='hidden lg:block'>
        <OffcanvasContent setShow={setShowOffcanvas} />
      </Offcanvas>
    
    </header>
  );
};

