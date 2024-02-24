import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ActivityItem from './ActivityItem';

export default function ActivityList({ activities,filter }) {
    const filteredActivities = filter === 'special'
        ? activities.filter(activity => activity.isSpecial)
        : activities;
    const renderItem = ({ item }) => <ActivityItem activity={item} />;
    
    return (
        <View >
            <FlatList
                style={styles.container}
                data={filteredActivities}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    // listContainer: {
    //     flex: 1,
    // },
    container: {
    flex: 1,
    width: '100%',
    padding: 10,                        
  },
    
});
