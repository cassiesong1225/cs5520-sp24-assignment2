import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import DatePickerComponent from '../Components/DatePicker'; 
import ActivityDropDownPicker from '../Components/ActivityDropDown'; 
import { ActivitiesListContext } from '../Components/ActivitiesListContext'; 
import GlobalStyles from '../StyleHelper'
const AddAnActivity = ({ navigation }) => {
  const [duration, setDuration] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date()); // This will be used for the DateTimePicker
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { addActivity } = useContext(ActivitiesListContext);

  const [activityType, setActivityType] = useState(''); // Renamed for consistency

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
      date: selectedDate.toISOString(),
    });
    
    navigation.navigate('AllActivities');
  };

  const handleCancel = () => {
    setSelectedDate(new Date());
    setDuration("");
    navigation.goBack();
  };



  return (
    <View style={GlobalStyles.ScreenContainer}>
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
          {selectedDate.toDateString()}
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DatePickerComponent
        date={selectedDate}
        setDate={setSelectedDate}
        showDatePicker={showDatePicker}
        setShowDatePicker={setShowDatePicker}
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
