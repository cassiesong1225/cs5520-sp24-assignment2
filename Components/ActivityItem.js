import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../StyleHelper';
import PressableButton from './PressableButton';
import { useNavigation } from '@react-navigation/native';

export default function ActivityItem({ activity }) {
     const navigation = useNavigation();
     function activityPressHandler() {
    navigation.navigate("AddAnActivity", { activityId: activity.id });
  }
    console.log('activity', activity);  
    return (
        
    
        <View >
            <PressableButton
            customStyle={styles.itemContainer} 
            onPressFunction={activityPressHandler}>
            
                <Text style={styles.activityName}>{activity.type}</Text>
        
                {activity.isSpecial ? (
                    <Entypo name="warning" size={24} color="orange" />)
                       : (
                 <View style={{ width: 15,marginRight:15 }} /> 

                   )} 
            <View style={styles.timeContiner}>
                <Text style={styles.dateadndurationText}>
                {activity.date ? new Date(activity.date).toDateString() : ''}
                </Text>
            </View>
             <View style={styles.timeContiner}> 
                <Text style={styles.dateadndurationText}>{activity.duration} min</Text>
            
                </View>
            </PressableButton>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.darkpurple,
        justifyContent: 'space-between',
        borderRadius: 10,
        padding: 10,
        width:'90%',
        marginBottom: 20,
        marginHorizontal: 20,
        height: 50,
    },

    activityName: {
        fontWeight: 'bold',
        fontSize: 14, 
        color: colors.screenBackground,
   
    },

        timeContiner: {
        flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            height: 30,
            justifyContent: 'flex-end',
            paddingHorizontal: 5,
        
    },

      
        

    timeText: {
        backgroundColor: 'white',
        color: colors.darkpurple, 
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
        padding: 5,
        marginRight: 3,
        marginLeft: 'auto',
    },

});

