import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ActivityItem from './ActivityItem';

export default function ActivitiesList({ activities }) {
    const renderItem = ({ item }) => <ActivityItem activity={item} />;
    
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={activities}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
    },
    
});
