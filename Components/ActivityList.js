import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ActivityItem from './ActivityItem';
import { fetchActivitiesFromDB } from '../firebase-files/fireStoreHelper';


export default function ActivityList({  filter }) {
    const [activities, setActivities] = useState([]);
    const filteredActivities = filter === 'special'
        ? activities.filter(activity => activity.isSpecial)
        : activities;
    const renderItem = ({ item }) => <ActivityItem activity={item} />;

    useEffect(() => {
    const getActivities = async () => {
      const fetchedActivities = await fetchActivitiesFromDB();
      setActivities(fetchedActivities);
    };

    getActivities();
  }, []); 
    
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
