import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'
import AddButton from '../Components/AddButton'
import ActivityList from '../Components/ActivityList'

export default function AllActivities({ navigation }) {

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <AddButton navigation={navigation} />
            }
        })
    })

    return (
        <View>
            <ActivityList currentScreen={"AllActivities"}/>
        </View>
    )
}

const styles = StyleSheet.create({})
