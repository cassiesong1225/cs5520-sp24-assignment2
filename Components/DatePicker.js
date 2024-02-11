import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';


const DatePickerComponent = ({ date, setDate, showDatePicker, setShowDatePicker }) => {
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false); 
    setDate(currentDate);
  };

  return (
    showDatePicker && (
      <DateTimePicker
        value={date}
        mode="date"
        display={Platform.OS === 'ios' ? 'inline' : 'default'}
        onChange={onChange}      
      />
    )
  );
};

export default DatePickerComponent;
