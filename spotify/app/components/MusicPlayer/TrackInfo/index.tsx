import Buttons from '@/app/elements/Buttons';
import React from 'react';
import { Pressable, Text, View, PressableProps, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface ExtraControlsProps {

}

const TrackInfo: React.FC<ExtraControlsProps> = ({

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
            <View className='flex-col  ml-3 mr-3'>
                <Buttons title='song Name' variant='text' />
                <Buttons title='album' variant='text' />
                </View>
            <View className='items-center'>
                <Buttons icon={<AntDesign name="hearto" size={24} color="black" />} variant='icon' />
            </View>
        </View>
    )
}

export default TrackInfo