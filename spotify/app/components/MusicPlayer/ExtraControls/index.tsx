import Buttons from '@/app/elements/Buttons';
import React from 'react';
import { Pressable, Text, View, PressableProps, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface ExtraControlsProps {

}

const ExtraControls: React.FC<ExtraControlsProps> = ({

}) => {


    return (
        <View className=' w-20 h-20 flex-row items-center'>
            <View className='w-full h-full'>
                <Image 
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMGwJ68utxPKKPgJK_sxK7YbSKwb06BspQJg&s"
                    }}
                    className='w-full h-full object-cover rounded-md'
                />
                </View>
        </View>
    )
}

export default ExtraControls