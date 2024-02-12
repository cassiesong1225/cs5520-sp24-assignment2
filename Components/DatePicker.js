import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Text, Platform, StyleSheet, View } from 'react-native';


const DatePickerComponent = ({ date, setDate,showDatePicker, setShowDatePicker }) => {
  console.log('date', date);
  const onChange = (event, date) => {
    setShowDatePicker(false);
    setDate(date);
  };


  return (
 

    showDatePicker && (
      <DateTimePicker
        value={date || new Date()}
        mode="date"
        display={Platform.OS === 'ios' ? 'inline' : 'default'}
        onChange={onChange}
      />
    )

 
  );
};

const styles = StyleSheet.create({
  dateText: {
    fontSize: 18,
    marginBottom: 10,
  },

})

export default DatePickerComponent;
