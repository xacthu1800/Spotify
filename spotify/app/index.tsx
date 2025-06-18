import { View, Text } from "react-native";
import Buttons from "@/app/components/Buttons";
import { Ionicons } from "@expo/vector-icons"; // Dùng icon cho minh họa
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Index() {
  return (
     <View className="flex-1 justify-center items-center space-y-4 bg-white p-4">
      {/* Primary Button */}
      <Buttons title="Primary" variant="primary" />

      {/* Secondary Button */}
      <Buttons title="Secondary" variant="secondary" />

      {/* Text Button */}
      <Buttons title="Text" variant="text" />

      {/* Navigation Button */}
      <Buttons  variant="navigation" icon={<MaterialCommunityIcons name="pause-circle-outline" size={24} color="black" />} />

      {/* Action Button */}
      <Buttons  variant="action" icon={<Ionicons name="moon-sharp" size={24} color="black" />}/>

      {/* Pill Button - greydark */}
      <Buttons title="Pill GreyDark" variant="pill" pillType="greydark" />

      {/* Pill Button - darkgrey */}
      <Buttons title="Pill DarkGrey" variant="pill" pillType="darkgrey" />

      {/* Button with icon */}
      <Buttons
        title="With Icon"
        variant="primary"
        icon={<Ionicons name="star" size={20} color="black" />}
      />

      {/* Icon Only */}
      <Buttons
        variant="action"
        icon={<Ionicons name="heart" size={20} color="red" />}
        iconOnly={true}
        accessibilityLabel="Heart Icon Button"
      />
    </View>
  );
}
