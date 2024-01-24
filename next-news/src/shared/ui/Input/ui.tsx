import React, { useRef } from 'react';
import { Props } from './type';
import { useTranslation } from 'next-i18next'
import { Close } from '@/shared/icons';

export const UI: React.FC<Props> = ({ 
  className, 
  type = "text", 
  id, 
  label = '', 
  value, 
  setValue,
  disabled,
  placeholder,
  icon,
  iconPosition = "right",
  error, 
  errorMes,
  requiredSign,
  inputClassName,
  allowClear = true,
  onClear,
  onChange
})  => {

  const { t } = useTranslation('common');
  const input = useRef<HTMLInputElement | null>(null);

  return (
    <div className={`flex flex-col w-full md:w-64  ${className ? className : ''}`}>
      { label && 
        <label className={`mb-2 font-bold ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`} htmlFor={id}>
          {t(label)} {requiredSign && <span className='text-error ml-1'>*</span>}
        </label>
      }
      <div className='relative flex items-center overflow-hidden'>
        <input 
          ref={input}
          value={value} 
          onChange={(e) => { setValue(e.target.value); if (onChange) onChange(e.target.value); }} 
          type={type} 
          className={`w-full ${inputClassName ? inputClassName : ''} text-sm ${disabled ? 'border-gray-400 bg-gray-200' : error ? 'border-error' : 'border-gray-300'} border py-2 px-4  ${icon ? iconPosition === "left" ? allowClear ? 'pr-12 pl-12' : 'pl-12' : allowClear ? 'pr-20' : 'pr-12' : allowClear ? 'pr-12' : ''} outline-none rounded-full `} 
          id={id} 
          disabled={disabled}
          placeholder={t(placeholder)}
        />
        {icon && <span onClick={() => { if(!disabled) setTimeout(() => { input?.current?.focus()}, 300)}} className={`absolute z-10 ${iconPosition === "left" ? 'left-5' : 'right-5'} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>{icon}</span>}
        {error && <p className='text-error absolute top-full mt-2 text-xs'>{t(errorMes)}</p>}
        <span onClick={() => { setValue(""); if (onClear) onClear(); }} className={`absolute transition-all z-10 cursor-pointer ${icon ? iconPosition === "right" ? 'right-12' : 'right-5' : 'right-5'} ${value === "" ? '-right-5' : ''} ${!allowClear ? 'opacity-0 invisible' : ''}`}><Close color="#6D757F" /></span>
      </div>
    </div>
  );
};

