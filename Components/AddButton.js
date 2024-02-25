import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'
import PressableButton from './PressableButton'
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function AddButton({ navigation }) {
  
  function AddButton() {
     navigation.navigate('AddAnActivity')
   
  }
  const PlusIcon = () => <AntDesign name="plus" size={30} color="white" />;

  return (
    <View >
      <PressableButton
        customStyle={styles.AddButton} 
        onPressFunction={AddButton} >
        <PlusIcon />  
      </PressableButton>
    </View>
  )
}

const styles = StyleSheet.create({
  
  AddButton: {
    backgroundColor: 'transparent',
    alignItems: 'flex-end', 

  }
})