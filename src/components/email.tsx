import { View, Text } from 'react-native'
import { Avatar } from './Avatar'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'

export function Email() {
  return (
    <View className="w-full flex-row gap-4">
      <Avatar
        source={{
          uri: 'https://img.freepik.com/vetores-premium/um-cachorro-de-desenho-animado-com-uma-coleira-que-diz-cachorrinho_198306-13.jpg',
        }}
      />
      <View className="flex-1">
        <View className="flex-row items-center gap-1">
          <MaterialIcons
            name="label-important"
            size={16}
            color={colors.yellow[600]}
          />

          <Text className="text-lg font-subtitle text-gray-300 flex-1">
            Larissa Nunes
          </Text>
          <Text className="text-sm font-body text-gray-300">16 de jan.</Text>
        </View>
        <Text
          className="text-base font-body text-gray-400"
          numberOfLines={1}
          lineBreakMode="tail"
        >
          Assunto do e-mail
        </Text>
        <View className="flex-row items-center gap-4">
          <Text
            className="text-base font-body text-gray-400 flex-1"
            numberOfLines={1}
            lineBreakMode="tail"
          >
            Essa é a mensagem do e-mail
          </Text>
          <MaterialIcons name="star" size={22} color={colors.blue[600]} />
        </View>
      </View>
    </View>
  )
}
