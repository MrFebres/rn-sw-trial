import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
          title: 'Home'
        }} 
      />
      <Stack.Screen name="detail/index" options={{
          title: 'Register',
          presentation: 'modal',
        }} 
      />
    </Stack>
  )
}