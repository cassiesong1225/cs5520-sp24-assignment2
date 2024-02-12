import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect,useContext } from 'react'
import AddButton from '../Components/AddButton'
import ActivitiesList from '../Components/ActivityList'
import { ActivitiesListContext } from '../Components/ActivitiesListContext'
import GlobalStyles from '../StyleHelper'

export default function AllActivities({ navigation }) {
    const { activities } = useContext(ActivitiesListContext);
    console.log(activities);

   useEffect(() => {
        navigation.setOptions({
            headerRight: () => <AddButton navigation={navigation} />
        });
    },[]);

    return (
        <View style={GlobalStyles.ScreenContainer}> 
            <ActivitiesList  activities={activities}/>
        </View>
    )
}


