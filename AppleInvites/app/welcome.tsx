import { View, Text } from 'react-native'
import React from 'react'

const welcome = () => {
    return (
        <View className="items-center flex-1 bg-green-950">
            <View className='w-full bg-white h-1/2'></View>

            <View className='flex-1 bg-yellow-800 jsutgap-4 '>
                <Text className="text-lg font-bold text-center text-white/50">Welcome to</Text>
                <Text className="text-5xl font-bold text-center text-white">Apple Invites</Text>
                <Text className="text-lg text-center text-white/60">Create beautiful invitations for all your events. Anyone can receive invitations. Sending included with iCloud+.</Text>
            </View>
        </View>
    )
}

export default welcome