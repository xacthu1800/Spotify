import React from 'react';
import { Pressable, Text, View, PressableProps } from 'react-native';
import { clsx } from 'clsx';

type Variant = 'primary' | 'secondary' | 'text' | 'navigation' | 'action' | 'pill';
type PillVariant = 'greydark' | 'darkgrey';

interface ButtonsProps extends PressableProps {
  title?: string;
  variant?: Variant;
  icon?: React.ReactNode;
  iconOnly?: boolean;
  pillType?: PillVariant;
}

const Buttons: React.FC<ButtonsProps> = ({
  title,
  variant = 'primary',
  icon,
  iconOnly = false,
  pillType = 'greydark',
  ...props
}) => {
  const baseStyle = "rounded-full px-4 py-2 flex-row justify-center items-center";

  const variantStyles = {
    primary: "bg-colors-primary text-black",
    secondary: "bg-colors-dark border-white text-white",
    text: "bg-colors-dark border-none text-white",
    navigation: "bg-colors-greys-0 p-2",
    action: "bg-transparent p-2",
    pill: {
      greydark: "bg-gray-400 text-black font-semibold",
      darkgrey: "bg-gray-900 text-white font-normal",
    },
  };

  const variantClass = variant === 'pill'
    ? variantStyles.pill[pillType]
    : variantStyles[variant];

  const appliedStyle = clsx(baseStyle, variantClass);

  return (
    <Pressable
      className={appliedStyle}
      onPress={() => console.log('Pressed')}
      style={({ pressed }) => ({
        opacity: pressed ? 0.7 : 1,
      })}
      {...props}
    >
      {icon && <View className="mr-2">{icon}</View>}
      {!iconOnly && <Text className="text-base">{title}</Text>}
    </Pressable>
  );
};

export default Buttons;
