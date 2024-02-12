import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ActivityItem from './ActivityItem';

export default function ActivityList({ activities,filter }) {
    const filteredActivities = filter === 'special'
        ? activities.filter(activity => activity.isSpecial)
        : activities;
    const renderItem = ({ item }) => <ActivityItem activity={item} />;
    
    return (
        <View style={styles.listContainer}>
            <FlatList
                contentContainerStyle={styles.scrollViewContent}
                data={filteredActivities}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
    },
    scrollViewContent: {
    alignItems: "center",
  },
    
});
