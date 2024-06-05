import { Avatar } from '@/components/Avatar'
import { Input } from '@/components/input'
import { MenuButton } from '@/components/menu-button'
import React from 'react'
import { View, Text } from 'react-native'

export default function Home() {
  return (
    <View className="flex-1 bg-[#2a2a2a] pt-10 p-3">
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar no e-mail..." />
        <Avatar
          size="medium"
          source={{
            uri: 'https://i.pinimg.com/736x/27/72/43/277243ecf332f1c672a861a2c536a690.jpg',
          }}
        />
      </Input>
    </View>
  )
}