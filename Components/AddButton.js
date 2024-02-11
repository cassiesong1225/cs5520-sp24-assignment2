import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useEffect} from 'react'

export default function AddButton({ navigation}) {

  return (
    <View>
        <Button title="Add" onPress={() => navigation.navigate('AddAnActivity')} />
    </View>
  )
}

const styles = StyleSheet.create({})