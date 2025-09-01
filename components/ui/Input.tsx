import React from 'react';

interface InputProps {
  type?: 'text' | 'email' | 'tel' | 'password';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  icon,
  className = '',
  disabled = false
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Иконка слева */}
      {icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-placeholder">
          {icon}
        </div>
      )}

      {/* Поле ввода - стили из дизайн-системы */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`input-field ${icon ? 'pl-10' : ''} ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      />
    </div>
  );
};

export default Input;
