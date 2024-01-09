import { Link } from 'expo-router';
import React from 'react'
import { Button, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Page</Text>
      <Link href={'detail'} asChild>
        <Button title='Go to Detail Screen' />
      </Link>
    </View>
  )
}
