import React from 'react';
import './Button.scss';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  className = '',
  disabled = false,
  withArrow = false,
  ...props 
}) => {
  // Valid variants: primary, secondary, blue, gold, green,
  // accent, main , border-main , border-accent
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button button--${variant} ${withArrow ? 'button-with-arrow' : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;