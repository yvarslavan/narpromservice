import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'active';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded transition-all duration-default cursor-pointer';

  // Варианты стилей из дизайн-системы
  const variantClasses = {
    primary: 'bg-gradient-primary text-white border-0 shadow-button hover:bg-gradient-primary-hover hover:shadow-button-hover',
    secondary: 'bg-white text-text-heading border border-neutral-medium hover:bg-neutral-light',
    active: 'bg-brand-blue text-white border border-brand-blue'
  };

  // Размеры из дизайн-системы
  const sizeClasses = {
    small: 'px-4 py-2 text-small',
    medium: 'px-6 py-3 text-button',
    large: 'px-8 py-4 text-button'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
