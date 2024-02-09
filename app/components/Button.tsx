import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { cn } from '../../lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

// NOTE: variant props for button
const variants = [
  `p-4 bg-neutral-800 rounded-md flex justify-center items-center`,
  {
    variants: {
      variant: {
        default: `bg-neutral-800 rounded-md flex justify-center items-center`,
        ghost: `bg-transparent`,
        outline: `border border-neutral-600 bg-transparent`,
        link: `bg-transparent px-1 py-1 border-b border-neutral-800`,
        secondary: `bg-neutral-200`,
        distructive: `bg-red-500 shadow-rose-600`,
      },
      size: {
        sm: `px-8 py-3`,
        lg: `px-14 py-4`,
        icon: `h-14 w-14`,
        md: `px-12 py-3`,
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
];

const buttonVariants = cva(...variants);

interface buttonProps extends TouchableOpacityProps, VariantProps<typeof buttonVariants> {}

const Button: React.FC<buttonProps> = ({ children, ...props }) => {
  return (
    <TouchableOpacity {...props} activeOpacity={0.5}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
// // NOTE: props defination for button extending all the props from TouchableOpacity
// interface buttonProps extends React.ComponentPropsWithoutRef<typeof TouchableOpacity> {
//   style?: object | object[];
//   classname?: string;
//   textClass?: string;
//   variant?: 'ghost' | 'outline' | 'link' | 'secondary' | 'distructive';
//   size?: 'sm' | 'md' | 'lg' | 'icon';
//   children: React.ReactNode;
//   wfull?: boolean;
//   elevated?: boolean;
//   textStyle?: object | object[];
// }

// // Button component
// const Button: React.FC<buttonProps> = ({
//   style,
//   variant,
//   classname,
//   size,
//   children,
//   wfull,
//   textClass,
//   elevated,
//   textStyle,
//   ...props
// }) => {
//   // NOTE: different background and size styles according to Button variants
//   const Variants = cn(
//     // default styling
//     `p-4 bg-neutral-800 rounded-md flex justify-center items-center`,
//     // Variants
//     variant === 'ghost' && 'bg-transparent',
//     variant === 'outline' && 'border border-neutral-600 bg-transparent',
//     variant === 'link' && 'bg-transparent px-1 py-1 border-b border-neutral-800',
//     variant === 'secondary' && 'bg-neutral-200',
//     variant === 'distructive' && 'bg-red-500 shadow-rose-600',
//     // size
//     size === 'sm' && variant !== 'link' && 'px-8 py-3',
//     size === 'lg' && variant !== 'link' && 'px-14 py-4',
//     size === 'icon' && variant !== 'link' && 'h-14 w-14',
//     size === 'md' && variant !== 'link' && 'px-12 py-3',
//     // special cases
//     wfull && 'w-full',
//     elevated && `shadow-xl ${variant === 'distructive' ? 'shadow-rose-600' : 'shadow-black/50'}`,
//     // custom classname
//     classname
//   );

//   // NOTE: different text styles according to Button variants
//   const textVariants = cn(
//     // default styling
//     `rounded-md flex justify-center items-center text-white`,
//     // variants
//     variant === 'ghost' && 'text-neutral-800',
//     variant === 'outline' && 'text-neutral-800',
//     variant === 'link' && 'text-neutral-800',
//     variant === 'secondary' && 'text-neutral-800',
//     variant === 'distructive' && 'text-red-50',
//     // size
//     size === 'sm' && 'text-base',
//     size === 'lg' && 'text-2xl font-normal',
//     size === 'md' && 'text-xl font-normal ',
//     // custom classname
//     textClass
//   );

//   // return button component
//   return (
//     <TouchableOpacity {...props} activeOpacity={0.5} className={Variants} style={style}>
//       {/* NOTE: will return text if the size prop !== icon otherwise it will only return childrens */}
//       {size !== 'icon' ? (
//         <Text className={textVariants} style={textStyle}>
//           {children}
//         </Text>
//       ) : (
//         children
//       )}
//     </TouchableOpacity>
//   );
// };

// export default Button;
