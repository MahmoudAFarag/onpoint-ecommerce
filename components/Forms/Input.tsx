import { forwardRef, ForwardedRef } from 'react';

interface InputProps {
  type: string;
  label: string;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  autoComplete: string;
}

const Input = forwardRef(
  ({ type, label, placeholder, autoComplete, value, disabled }: InputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <div>
      <label htmlFor={label} className='mb-2.5 font-medium capitalize text-mystic-dark'>
        {label} :
      </label>
      <input
        type={type}
        id={label}
        value={value}
        disabled={disabled}
        required
        className='block w-full rounded bg-mystic py-2 px-2 text-mystic-dark outline-none'
        placeholder={placeholder}
        ref={ref}
        autoComplete={autoComplete}
      />
    </div>
  )
);

Input.displayName = 'Input';
export default Input;
