import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import ActivityDropDownPicker from '../Components/ActivityDropDown'; // Adjust the path as needed
import { ActivitiesListContext } from '../Components/ActivitiesListContext'; // Adjust the path as needed

const AddAnActivity = ({ navigation }) => {
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { addActivity } = useContext(ActivitiesListContext);

  const [activityType, setActivityType] = useState(null);

  const handleSaveActivity = () => {
    // Basic validation
    if (!activityType) {
      alert('Please select an activity type.');
      return;
    }
    const numericDuration = parseInt(duration, 10);
    if (isNaN(numericDuration) || numericDuration <= 0) {
      alert('Please enter a valid duration.');
      return;
    }

    // Add activity to the context
    addActivity({
      id: Date.now().toString(),
      type: activityType,
      duration: numericDuration,
      date: date.toISOString(),
    });

    // Navigate back to the previous screen
    navigation.goBack();
  };

   function handleCancel() {
    setDate(new Date());
    setDuration("");
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ActivityDropDownPicker onActivityChange={setActivityType} />

      <TextInput
        style={styles.input}
        onChangeText={setDuration}
        value={duration}
        placeholder="Duration (min)"
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.input}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.dateText}>
          {date.toDateString()}
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="inline" // Use 'default' for Android
          onChange={(event, selectedDate) => {
            const currentDate = selectedDate || date;
            setShowDatePicker(Platform.OS === 'ios');
            setDate(currentDate);
          }}
        />
      )}

      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={handleCancel} color="#999" />
        <Button title="Save" onPress={handleSaveActivity} color="#0066CC" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // Define your container styles here
  },
  input: {
    borderColor: '#3B387E',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    // Define your text input styles here
  },
  dateText: {
    fontSize: 18,
    // Additional styles for the date text
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // Additional styles for the button container
  },
  // Add other styles as needed
});

export default AddAnActivity;
