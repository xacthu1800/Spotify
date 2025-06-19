import { View, Text } from "react-native";
import Buttons from "@/app/elements/Buttons";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

import TrackInfo from '@/app/components/MusicPlayer/TrackInfo'
import PlaybackControl from '@/app/components/MusicPlayer/PlaybackControls_ProgressBar/PlaybackControls'
import ProgressBar from '@/app/components/MusicPlayer/PlaybackControls_ProgressBar/ProgressBar'
import ExtraControls from "./components/MusicPlayer/ExtraControls";

export default function Index() {
  return (
    <View className="w-full h-full justify-center items-center bg-gray-600 ">
      <View className="w-full h-20 flex-row justify-between items-center">
        <TrackInfo />
        
        <View>
          <PlaybackControl />
          <ProgressBar /> 
        </View>

        <ExtraControls />


      </View>
      
    </View>
  );
}
