import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import DatePickerComponent from '../Components/DatePicker'; 
import ActivityDropDownPicker from '../Components/ActivityDropDown'; 
import { ActivitiesListContext } from '../Components/ActivitiesListContext'; 
import GlobalStyles, { colors } from '../StyleHelper'

const AddAnActivity = ({ navigation }) => {
  const [duration, setDuration] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { addActivity } = useContext(ActivitiesListContext);

  const [activityType, setActivityType] = useState(''); // Renamed for consistency

  const handleSaveActivity = () => {
    if (!activityType) {
      alert('Please select an activity type.');
      return;
    }

    const numericDuration = parseInt(duration, 10);
    if (isNaN(numericDuration) || numericDuration <= 0) {
      alert('Please enter a valid duration.');
      return;
    }
     if (!selectedDate) {
      alert('Please select a date.');
      return;
    }


    
    // Add activity to the context
    addActivity({
      id: Date.now().toString(),
      type: activityType,
      duration: numericDuration,
      date: selectedDate.toISOString(),
      isSpecial,
    });
    
    navigation.navigate('AllActivities');
  };

  const isSpecial = (activityType === 'Running' || activityType === 'Weights') && duration > 60;


  const handleCancel = () => {
    setSelectedDate(new Date());
    setDuration("");
    navigation.goBack();
  };
  console.log('date', selectedDate);


  return (
    <View style={styles.container}>
      <View style={styles.edit}>
        <Text style={GlobalStyles.lable}>Activity *</Text>
        <ActivityDropDownPicker onActivityChange={setActivityType} />
      <Text style={GlobalStyles.lable}>Duration *</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDuration}
        value={duration}
        keyboardType="numeric"
        />
        <Text style={GlobalStyles.lable}>Date *</Text>

      <TouchableOpacity
        style={styles.input}
        onPress={() => setShowDatePicker(true)}
        >
             <Text style={styles.dateText}>
          {selectedDate ? selectedDate.toDateString() : ''}
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
        <Button title="Cancel" onPress={handleCancel} color="red" />
          <Button title="Save" onPress={handleSaveActivity} color={colors.darkpurple} />
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: colors.screenBackground,
    justifyContent: 'flex-start',
  },
  edit: {
      marginTop: 20,
      marginHorizontal: 10,
  },

  input: {
    borderColor: colors.darkpurple,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  dateText: {
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 150,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default AddAnActivity;
