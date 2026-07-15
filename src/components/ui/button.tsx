import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Exactly two button treatments in this system — see assets/DESIGN.md §4 Buttons.
// No third variant, no size scale beyond the one documented padding.
const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-none px-[30px] py-[10px] font-sans text-[20px] font-normal transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        outline: 'border border-forest bg-canvas text-forest hover:bg-forest/5',
        filled: 'border border-forest bg-forest text-canvas hover:bg-forest/90',
      },
    },
    defaultVariants: {
      variant: 'filled',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
