import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect,useContext } from 'react'
import AddButton from '../Components/AddButton'
import ActivityList from '../Components/ActivityList'
import { ActivitiesListContext } from '../Components/ActivitiesListContext'
import GlobalStyles from '../StyleHelper'

export default function AllActivities({ navigation }) {
    const { activities } = useContext(ActivitiesListContext);
 

   useEffect(() => {
        navigation.setOptions({
            headerRight: () => <AddButton navigation={navigation} />
        });
    },[]);

    return (
        <View style={GlobalStyles.ScreenContainer}> 
            <ActivityList  activities={activities}/>
        </View>
    )
}


