import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useContext} from 'react'
import GlobalStyles from '../StyleHelper'
import ActivityList from '../Components/ActivityList'
import AddButton from '../Components/AddButton'
import { ActivitiesListContext } from '../Components/ActivitiesListContext'

export default function SpecialActivities({ navigation }) {
  const { activities } = useContext(ActivitiesListContext);
  useEffect(() => {
        navigation.setOptions({
            headerRight: () => <AddButton navigation={navigation} />
        });
    },[]);
  return (
    <View style={ GlobalStyles.ScreenContainer}>
      <ActivityList activities={activities} filter="special" />
    </View>
  )
}

const styles = StyleSheet.create({})