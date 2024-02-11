import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect,useContext } from 'react'
import AddButton from '../Components/AddButton'
import ActivitiesList from '../Components/ActivityList'
import { ActivitiesListContext } from '../Components/ActivitiesListContext'

export default function AllActivities({ navigation }) {
    const { activities } = useContext(ActivitiesListContext);
    console.log(activities);

   useEffect(() => {
        navigation.setOptions({
            headerRight: () => <AddButton navigation={navigation} />
        });
    },[]);

    return (
        <View style={styles.container}> 
            <ActivitiesList  activities={activities}/>
        </View>
    )
}

const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: '#AAA8C8',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
