import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ActivityItem from './ActivityItem';
import { database } from '../firebase-files/firebaseSetup'; 
import { collection, onSnapshot } from "firebase/firestore";

export default function ActivityList({ filter }) {
    const [activities, setActivities] = useState([]);
    const filteredActivities = filter === 'special'
        ? activities.filter(activity => activity.isSpecial)
        : activities;
    const renderItem = ({ item }) => <ActivityItem activity={item} />;

   useEffect(() => {
    onSnapshot(collection(database, "activities"), (querrySnapshot) => {
      let newArray = [];
      querrySnapshot.forEach((doc) => {
        newArray.push({ ...doc.data(), id: doc.id });
        console.log(doc.id, " => ", doc.data());
      });
      setActivities(newArray);

    },)
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
