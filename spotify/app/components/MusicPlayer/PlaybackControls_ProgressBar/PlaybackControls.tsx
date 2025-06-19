import Buttons from '@/app/elements/Buttons';
import React from 'react';
import { Pressable, Text, View, PressableProps, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface PlaybackControlsProps {

}

const PlaybackControls: React.FC<PlaybackControlsProps> = ({

}) => {


    return (
        <View className='flex-row'>

            <Buttons icon={<Ionicons name="play-back-outline" size={24} color="black" />} variant='icon' />
            <Buttons icon={<MaterialIcons name="play-circle-outline" size={24} color="black" />} variant='icon' />
            <Buttons icon={<Ionicons name="play-forward-outline" size={24} color="black" />} variant='icon'/>
        </View>
    )
}

export default PlaybackControls