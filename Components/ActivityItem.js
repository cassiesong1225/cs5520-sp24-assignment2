import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

export default function ActivityItem({ activity }) {
     
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.activityName}>{activity.name}</Text>
            {activity.isSpecial && (
                <Entypo name="warning" size={24} color="orange" />
            )}
            <Text style={styles.activityDate}>
                {activity.date ? new Date(activity.date).toDateString() : ''}
            </Text>
            <Text style={styles.activityDuration}>{activity.duration} min</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    activityName: {
        flex: 1,
        fontWeight: 'bold',
    },
    activityDate: {
        marginRight: 10,
    },
    activityDuration: {
        marginRight: 10,
    },
    // Additional styles for ActivityItem
});
