import { ReactNode } from 'react'
import { View, TextInput, TextInputProps } from 'react-native'

type InputProps = {
  children: ReactNode
}

function Input({ children }: InputProps) {
  return (
    <View className="w-full h-14 bg-[#000] rounded-lg p-4 flex-row items-center gap-4">
      {children}
    </View>
  )
}

function InputField({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="flex-1 font-normal text-base text-white"
      placeholderTextColor={'#8b8b8b'}
      {...rest}
    />
  )
}

Input.Field = InputField

export { Input }
