import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps {
    color?: 'bg-primary' | 'bg-secondary' | 'bg-success' | 'bg-warning' | 'bg-danger' ;
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ color = 'bg-primary', children, asChild }: ButtonProps){
    const Comp = asChild ? Slot : 'button';
    return (
        <Comp 
            className={clsx(
                'py-4 px-3 rounded font-semibold text-black text-sm w-full transition-colors', 
                {
                    'bg-cyan-500': color === 'bg-primary',
                    'bg-gray-200': color === 'bg-secondary',
                    'bg-green-600': color === 'bg-success',
                    'bg-yellow-600': color === 'bg-warning',
                    'bg-red-600': color === 'bg-danger',
                }
            )}
        >
            {children}
        </Comp>
    )
}