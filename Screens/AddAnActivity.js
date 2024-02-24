import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import DatePickerComponent from '../Components/DatePicker'; 
import ActivityDropDownPicker from '../Components/ActivityDropDown'; 
import { ActivitiesListContext } from '../Components/ActivitiesListContext'; 
import GlobalStyles, { colors } from '../StyleHelper'
import PressableButton from '../Components/PressableButton';

const AddAnActivity = ({ navigation }) => {
  const [duration, setDuration] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { addActivity } = useContext(ActivitiesListContext);

  const [activityType, setActivityType] = useState(''); 

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
      date: selectedDate.toDateString(),
      isSpecial,
    });
    
    navigation.navigate('AllActivities');
  };

  const isSpecial = (activityType === 'Running' || activityType === 'Weights') && duration > 60;
  const showDatePickerHandler = () => {
   if (!selectedDate) {
      setSelectedDate(new Date());
    }
    setShowDatePicker(!showDatePicker);
};

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

      <TextInput
          value={selectedDate ? selectedDate.toDateString() : ''}
          onPressIn={showDatePickerHandler}
          style={styles.input} 
  
        />
     

      {showDatePicker && (
        <DatePickerComponent
            date={selectedDate}
             setDate={setSelectedDate}
        showDatePicker={showDatePicker}
        setShowDatePicker={setShowDatePicker}
      />
      )}

      <View style={styles.buttonContainer}>
         <PressableButton 
          customStyle={styles.cancelButton} 
          onPressFunction={handleCancel} >
          <Text style={styles.buttonText}>Cancel</Text>
          </PressableButton>
          <PressableButton 
          customStyle={styles.saveButton} 
          onPressFunction={handleSaveActivity} >
          <Text style={styles.buttonText}>Save</Text>
          </PressableButton>
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
      marginTop: 30,
      marginHorizontal: 10,
  },

  input: {
    borderColor: colors.darkpurple,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 30,
  },
  dateText: {
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 150,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
   cancelButton: {
        backgroundColor: colors.red,
  },
  saveButton: {
    backgroundColor: colors.darkpurple,
  }
,
  buttonText: {
    color: 'white',
    textAlign: 'center',
  }
});

export default AddAnActivity;
