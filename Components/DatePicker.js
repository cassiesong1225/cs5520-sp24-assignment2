import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {  Platform } from 'react-native';


const DatePickerComponent = ({ date, setDate,showDatePicker, setShowDatePicker }) => {
  const onChange = (event, selectedDate) => {
    if (Platform.OS === 'android' || event.type === 'set') {
      setShowDatePicker(false);
    }
   
    if (event.type === 'set') {
      setDate(selectedDate);
    }
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



export default DatePickerComponent;
