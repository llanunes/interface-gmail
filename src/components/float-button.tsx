import { MaterialIcons } from '@expo/vector-icons'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

type FloatButtonProps = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap
}

export function FloatButton({ icon, ...rest }: FloatButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...rest}
      className="px-4 gap-2 py-4 flex-row items-center bg-gray-400 rounded-full absolute bottom-4 right-4"
    >
      {icon && <MaterialIcons name={icon} size={22} color={'black'} />}
      <Text className="font-subtitle text-gray-900">Escrever</Text>
    </TouchableOpacity>
  )
}
