import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../StyleHelper';

export default function ActivityItem({ activity }) {
     
    return (
        <View style={ styles.itemContainer }>
        
                <Text style={styles.activityName}>{activity.type}</Text>
            <View style={styles.icon}>
                {activity.isSpecial ? (
                    <Entypo name="warning" size={24} color="orange" />)
                       : (
                 <View style={{ width: 24,marginRight:15 }} /> 

                   )} 
            </View>
         
            <View style={styles.dateContainer}>
            <Text style={styles.dateadndurationText}>
                {activity.date ? new Date(activity.date).toDateString() : ''}
                </Text>
            </View>
            <View style={styles.durationContainer}>
           
                <Text style={styles.dateadndurationText}>{activity.duration} min</Text>
            </View>
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
        width: '90%',
        marginBottom: 20,
        marginHorizontal: 20,
    },

    activityName: {
        fontWeight: 'bold',
        fontSize: 14, 
        color: colors.screenBackground,
   
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',


    },
        dateContainer: {
            backgroundColor: 'white',
            padding: 6,
            alignItems: 'center',
            marginLeft: 10,
            marginRight: 2,
         
        
    },
     durationContainer: {
        backgroundColor: 'white',
        padding: 6,
         alignItems: 'center',

 
      
        
    },
    dateadndurationText: {
        color: colors.darkpurple, 
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
    },

});

