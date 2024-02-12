import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

export default function ActivityItem({ activity }) {
     
    return (
        <View style={ styles.itemContainer }>
        

            <Text style={styles.activityName}>{activity.type}</Text>
            {activity.isSpecial && (
                <Entypo name="warning" size={24} color="orange" />
                )}
            <View style={styles.dateContainer}>
            <Text style={styles.activityDate}>
                {activity.date ? new Date(activity.date).toDateString() : ''}
            </Text>
            </View>
            <View style={styles.durationContainer}>
                <Text style={styles.activityDuration}>{activity.duration} min</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4B4B7C', 
        justifyContent: 'space-between',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        width: '90%',
        marginTop: 20,
        marginHorizontal: 20,
    },

    activityInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    activityName: {
        fontWeight: 'bold',
        fontSize: 14, 
        color: '#AAA8C8', 
    },
    icon: {
        marginLeft: 8, 
    },
     dateContainer: {
        backgroundColor: 'white',
        padding: 6,
        marginRight: 6, 
    },
    activityDate: {
        color: '#4B4B7C', 
        marginBottom: 4,
        fontWeight: 'bold',
        fontSize: 14,
    },
   durationContainer: {
        backgroundColor: 'white',
        padding: 6,
    },
    activityDuration: {
        color: '#4B4B7C', 
        fontWeight: 'bold',
        fontSize: 14,
    },
});

