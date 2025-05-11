import { forwardRef } from 'react';

const Input = forwardRef(
  ({ type, id, name, value, placeholder, onClick, onChange}, ref) => {
    return (
      <input
        ref={ref}
        id={id}
        name={name}
        value={value}
        type={type}
        onClick={onClick}
        placeholder={placeholder}
        onChange={onChange}
        required
        className="p-[15px] placeholder-firmBlack/50 focus:placeholder-firmBlack active:placeholder-firmBlack rounded-[10px] border border-firmBlack outline-none"
      />
    );
  }
);

export default Input;