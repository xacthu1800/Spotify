import React from 'react';
import { Pressable, Text, View, PressableProps } from 'react-native';


type Variant = 'primary' | 'secondary' | 'text' |'icon' | 'pill';

interface ButtonsProps extends PressableProps {
  title?: string;
  variant?: Variant;
  icon?: React.ReactNode;
  iconOnly?: boolean;
}

const Buttons: React.FC<ButtonsProps> = ({
  title,
  variant = 'primary',
  icon,
  iconOnly = false,
  ...props
}) => {
  const baseStyle = "rounded-full px-4 py-2 flex-row justify-center ";

  const variantClass = {
    primary: "bg-primary ",
    secondary: "bg-primary-dark border rounded-full border-white",
    text:"bg-transparent",
    icon: "bg-transparent p-0 scale-150",
    pill: "bg-primary-light border rounded-full ",
  }

  const textClass = {
    primary: "text-primary-dark px-6 font-bold",
    secondary: "text-primary-light px-6 font-semibold",
    text:"text-primary-light font-bold",
    icon: "p-0",
    pill: "text-primary-dark font-bold px-4",
  }

  const variantStyle = variantClass[variant] ;
  const textStyle = textClass[variant];

  return (
    <Pressable
      className={`${baseStyle} ${variantStyle}`}
      onPress={() => console.log('Pressed')}
      style={({ pressed }) => ({
        opacity: pressed ? 0.7 : 1,
      })}
      {...props}
    >
      {<View>
          <Text className={`text-base ${textStyle}`}>
            {title || icon} 
          </Text>
        </View>}
      
    </Pressable>
  );
};

export default Buttons;
