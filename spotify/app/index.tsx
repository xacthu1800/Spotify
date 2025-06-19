import { View, Text } from "react-native";
import Buttons from "@/app/components/Buttons";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Index() {
  return (
     <View className="flex-1 justify-center items-center space-y-4 bg-gray-600 p-4">
      <Buttons title="Start session" variant="primary" />
      <Buttons title="Sign up" variant="secondary" />
      <Buttons title="Sign up" variant="text"/>
      <view className="inline-flex justify-center align-center">
       <Buttons icon={<Ionicons name="home-outline" size={24} color="black" />} variant="icon" /> 
       <Buttons icon={<FontAwesome5 name="microphone" size={24} color="black" />} variant="icon" /> 
      </view>
      <Buttons title="All" variant="pill"/>
    
    </View>
  );
}
