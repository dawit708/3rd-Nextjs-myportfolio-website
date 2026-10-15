import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', ...props }, ref) => {
    
    // Base classes for all buttons
    let baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
    
    // Variant classes
    let variantClasses = "";
    if (variant === 'primary') variantClasses = "bg-indigo-600 text-white hover:bg-indigo-700";
    if (variant === 'secondary') variantClasses = "bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] border border-gray-800";
    if (variant === 'outline') variantClasses = "border border-gray-700 bg-transparent hover:bg-gray-800 text-white";
    
    // Size classes
    let sizeClasses = "";
    if (size === 'sm') sizeClasses = "h-9 px-4 text-sm";
    if (size === 'md') sizeClasses = "h-11 px-6 text-base";
    if (size === 'lg') sizeClasses = "h-12 px-8 text-lg";

    // Combine everything
    const finalClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;

    return (
      <button
        ref={ref}
        className={finalClasses}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';