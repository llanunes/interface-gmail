import { Avatar } from '@/components/Avatar'
import { Email } from '@/components/email'
import { FloatButton } from '@/components/float-button'
import { Input } from '@/components/input'
import { MenuButton } from '@/components/menu-button'
import { Emails } from '@/utils/emails'
import React from 'react'
import { View, Text, FlatList } from 'react-native'

export default function Home() {
  return (
    <View className="flex-1 bg-[#2a2a2a] pt-10 p-3">
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar no e-mail..." />
        <Avatar
          size="small"
          source={{
            uri: 'https://i.pinimg.com/736x/27/72/43/277243ecf332f1c672a861a2c536a690.jpg',
          }}
        />
      </Input>
      <FlatList
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={Emails}
        renderItem={({ item }) => <Email data={item} />}
        contentContainerClassName="gap-6"
        ListHeaderComponent={() => (
          <Text className="uppercase text-gray-300 text-sm font-subtitle mt-6">
            Entrada
          </Text>
        )}
      />
      <FloatButton icon="edit" />
    </View>
  )
}
