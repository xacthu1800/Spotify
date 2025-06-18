import React from 'react';
import { Pressable, Text, View, PressableProps } from 'react-native';


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
  primary: "bg-primary font-bold",
  secondary: "bg-primary-dark border font-bold border-white text-white",
  text: "bg-dark font-bold text-white", 
  navigation: "bg-greys-0 font-bold p-2", 
  action: "bg-transparent font-bold p-2",
  pill: {
    greydark: "bg-gray-400 text-black font-bold ",
    darkgrey: "bg-gray-900 text-white font-bold ",
  },
}


  const variantClass = variant === 'pill'
    ? variantStyles.pill[pillType]
    : variantStyles[variant];

  return (
    <Pressable
      className={`${baseStyle} ${variantClass}`}
      onPress={() => console.log('Pressed')}
      style={({ pressed }) => ({
        opacity: pressed ? 0.7 : 1,
      })}
      {...props}
    >
      {icon && <View className="mr-2">{icon}</View>}
      {!iconOnly && <View >{title}</View>}
    </Pressable>
  );
};

export default Buttons;
