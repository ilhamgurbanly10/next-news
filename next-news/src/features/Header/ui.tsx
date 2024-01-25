import React from 'react';
import { Props } from './type';
import useModel from './model';
import Top from './Top';
import Offcanvas from '@/shared/ui/Offcanvas';
import Container from '@/shared/ui/Container';
import OffcanvasContent from './OffcanvasContent';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import Search from './Search';
import HamburgerMenu from '@/shared/ui/HamburgerMenu';
import IconicButton from '@/shared/ui/Buttons/IconicButton';
import { Bars, FacebookFilled, TwitterOutlined, InstagramOutlined, LinkedinFilled, YoutubeFilled } from '@/shared/icons';
import MobileNavbar from './MobileNavbar';

export const UI: React.FC<Props> = ({  })  => {

  const { showOffcanvas, setShowOffcanvas, showMenu, setShowMenu } = useModel();

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

          <Search className='mr-8' />

        </Container>

        <Container className='flex lg:hidden items-center justify-between p-4'>

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

            <button type="button" className='text-4xl' onClick={() => { setShowMenu(true); }}><Bars color="#F4796C" /></button>

        </Container>

      </div>

      <HamburgerMenu show={showMenu} setShow={setShowMenu}>

          <div>

              <div className='mt-8'>
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

              <Search className="mt-4" rounded={false} />

              <MobileNavbar className='mt-6' />
              
              <div className='flex justify-between mt-6'>
                 <IconicButton href="/" isLink={true} icon={<FacebookFilled color="#183354" />} />
                 <IconicButton href="/" isLink={true} icon={<TwitterOutlined color="#183354" />} />
                 <IconicButton href="/" isLink={true} icon={<InstagramOutlined color="#183354" />} />
                 <IconicButton href="/" isLink={true} icon={<LinkedinFilled color="#183354" />} />
                 <IconicButton href="/" isLink={true} icon={<YoutubeFilled />} />
              </div>

          </div>

      </HamburgerMenu>

      <Offcanvas show={showOffcanvas} setShow={setShowOffcanvas} className='hidden lg:block'>
        <OffcanvasContent setShow={setShowOffcanvas} />
      </Offcanvas>
    
    </header>
  );
};

