import { View, Text } from "react-native";
import Buttons from "@/app/elements/Buttons";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import ExtraControls from '@/app/components/MusicPlayer/ExtraControls'


export default function Index() {
  return (
    <View className="w-full h-full justify-center items-center bg-gray-600 ">
      <ExtraControls />
    </View>
  );
}
