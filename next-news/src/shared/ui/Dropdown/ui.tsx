import React from 'react';
import { Props } from './type';
import useModel from './model';
import Link from 'next/link';
import { Down } from '@/shared/icons';
import { Parent } from './type';
export const UI: React.FC<Props> = ({ className, parent, btnClassName, dropdownClassName, dropdownBtnClassName, innerDropdownClassName })  => {

  const { showDropdown, setShowDropdown, shownInnerDropdowns, setShownInnerDropdowns } = useModel();

  return (
    <div onMouseEnter={() => { if (!parent?.disabled) setShowDropdown(true) }} onMouseLeave={() => { setShowDropdown(false) }} className={`dropdown-container ${className ? className : ''}`}>
      
      {parent?.isLink ? 
        <Link href={parent.href}>
          <span className={`dropdown-btn transition-all font-bold inline-flex items-center ${btnClassName ? btnClassName : ''} ${parent?.disabled ? 'cursor-not-allowed text-primary-grey' : parent?.active ? 'cursor-pointer text-primary-orange' : `cursor-pointer text-primary-blue ${showDropdown ? 'text-primary-orange' : ''} `}`} onClick={(e) => { if(parent?.disabled) e.preventDefault(); if(parent?.onClick && !parent?.disabled) parent.onClick(); }}>
            <span>{parent.label}</span>
            {parent?.children?.length > 0 && <span className={`ml-2 text-sm transition-all ${showDropdown ? 'rotate-180' : 'rotate-0'}`}><Down /></span>}
          </span>
        </Link> 
        :
        <button onClick={() => { if(parent?.onClick && !parent?.disabled) parent.onClick(); }} type='button' className={`dropdown-btn transition-all font-bold inline-flex items-center ${btnClassName ? btnClassName : ''} ${parent?.disabled ? 'cursor-not-allowed text-primary-grey' : parent?.active ? 'cursor-pointer text-primary-orange' : `cursor-pointer text-primary-blue ${showDropdown ? 'text-primary-orange' : ''} `}`}>
          <span>{parent.label}</span>
          {parent?.children?.length > 0 && <span className={`ml-2 text-sm transition-all ${showDropdown ? 'rotate-180' : 'rotate-0'}`}><Down /></span>}
        </button>
       }

       <div className={`dropdown transition-all absolute z-30 pt-6 ${showDropdown ? 'visible opacity-1 top-full' : 'invisible opacity-0 top-4' }`}>
          
          <div className={`dropdown-content flex flex-col min-w-60 bg-white rounded shadow-md py-4 ${dropdownClassName ? dropdownClassName : ''}`}>
            {parent?.children?.map((item: Parent, i: number) => (
              <>
                <div onMouseOver={() => { if (!item?.disabled) setShownInnerDropdowns([...shownInnerDropdowns, i]); }} onMouseOut={() => { setShownInnerDropdowns([...shownInnerDropdowns?.filter((d) => { return d != i})]) }} className='relative'>
                  {item?.isLink ? 
                  <Link href={item.href}>
                    <span key={i} className={`dropdown-btn w-full mt-3 first:mt-0 transition-all px-4 font-bold inline-flex items-center justify-between ${dropdownBtnClassName ? dropdownBtnClassName : ''} ${item?.disabled ? 'cursor-not-allowed text-primary-grey' : item?.active ? 'cursor-pointer text-primary-orange' : `cursor-pointer text-primary-blue ${shownInnerDropdowns?.some((d) => { return d == i}) ? 'text-primary-orange' : ''} `}`} onClick={(e) => { if(item?.disabled) e.preventDefault(); if(item?.onClick && !item?.disabled) item.onClick(); }}>
                      <span>{item.label}</span>
                      {item?.children?.length > 0 && <span className={`ml-2 text-sm transition-all ${shownInnerDropdowns?.some((d) => { return d == i}) ? 'rotate-180' : 'rotate-0'}`}><Down /></span>}
                    </span>
                  </Link> 
                  :
                  <button key={i} onClick={() => { if(item?.onClick && !item?.disabled) item.onClick(); }} type='button' className={`dropdown-btn w-full px-4 mt-3 first:mt-0 transition-all font-bold inline-flex items-center justify-between ${dropdownBtnClassName ? dropdownBtnClassName : ''} ${item?.disabled ? 'cursor-not-allowed text-primary-grey' : item?.active ? 'cursor-pointer text-primary-orange' : `cursor-pointer text-primary-blue ${shownInnerDropdowns?.some((d) => { return d == i}) ? 'text-primary-orange' : ''} `}`}>
                    <span>{item.label}</span>
                    {item?.children?.length > 0 && <span className={`ml-2 text-sm transition-all ${shownInnerDropdowns?.some((d) => { return d == i}) ? 'rotate-180' : 'rotate-0'}`}><Down /></span>}
                  </button>
                  }
                  <div className={`inner-dropdown absolute transition-all flex flex-col min-w-60 bg-white rounded shadow-md py-4 left-full ${shownInnerDropdowns?.some((d) => { return d == i}) ? 'visible opacity-1 top-0' : 'invisible opacity-0 -top-4' } ${innerDropdownClassName ? innerDropdownClassName : ''}`}>
                      {item?.children?.map((child: Parent, y: number) => (
                        <div key={`${i}_${y}`}>
                          {child?.isLink ? 
                          <Link href={child.href}>
                            <span key={i} className={`dropdown-btn w-full mt-3 first:mt-0 transition-all px-4 font-bold inline-flex items-center justify-between ${dropdownBtnClassName ? dropdownBtnClassName : ''} ${child?.disabled ? 'cursor-not-allowed text-primary-grey' : child?.active ? 'cursor-pointer text-primary-orange' : `cursor-pointer text-primary-blue hover:text-primary-orange`}`} onClick={(e) => { if(child?.disabled) e.preventDefault(); if(child?.onClick && !child?.disabled) child.onClick(); }}>
                              <span>{child.label}</span>
                            </span>
                          </Link> 
                          :
                          <button key={i} onClick={() => { if(child?.onClick && !child?.disabled) child.onClick(); }} type='button' className={`dropdown-btn w-full px-4 mt-3 first:mt-0 transition-all font-bold inline-flex items-center justify-between ${dropdownBtnClassName ? dropdownBtnClassName : ''} ${child?.disabled ? 'cursor-not-allowed text-primary-grey' : child?.active ? 'cursor-pointer text-primary-orange' : `cursor-pointer text-primary-blue hover:text-primary-orange`}`}>
                            <span>{child.label}</span>
                          </button>
                          }
                        </div>
                      ))}
                  </div>
                </div>
              </>
            ))}
          </div>
       </div>

    </div>
  );
};

