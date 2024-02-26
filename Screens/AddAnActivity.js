import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import DatePickerComponent from '../Components/DatePicker'; 
import ActivityDropDownPicker from '../Components/ActivityDropDown'; 
import { ActivitiesListContext } from '../Components/ActivitiesListContext'; 
import GlobalStyles, { colors } from '../StyleHelper'
import PressableButton from '../Components/PressableButton';
import { addActivityToDB, fetchActivityById, updateActivityById, deleteFromDB} from '../firebase-files/fireStoreHelper';
import { AntDesign } from "@expo/vector-icons";
import Checkbox from 'expo-checkbox';


const AddAnActivity = ({ route, navigation }) => {
  const [duration, setDuration] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  // const { addActivity } = useContext(ActivitiesListContext);
  const [activityType, setActivityType] = useState(''); 
  const [isEditMode, setIsEditMode] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);



  

  useEffect(() => {
    if (route.params && route.params.activityId) {
      setIsEditMode(true);
      fetchActivityData(route.params.activityId);
    }else {
    setIsEditMode(false); 
  }
  }, [route.params]);

  const fetchActivityData = async (activityId) => {
    try {
      const activityData = await fetchActivityById(activityId);
      if (activityData) {
        setActivityType(activityData.type);
        setDuration(activityData.duration.toString()); // Convert to string if necessary
        setSelectedDate(new Date(activityData.date)); // Ensure date format is correct for your DatePickerComponent
        setIsUpdate(activityData.isSpecial);
        console.log('activityData.isSpecial', activityData.isSpecial);
      }
    } catch (error) {
      console.error("Error fetching activity data: ", error);
    }
  };
console.log('isUpdate', isUpdate);
 
let isSpecial = (activityType === 'Running' || activityType === 'Weights') && duration > 60;
  
 
  const ShowCheckbox = isUpdate && isSpecial && isEditMode;
    
  console.log('ShowCheckbox', ShowCheckbox);
  

  const handleSaveActivity = async () => {
    const proceedWithSave = async () => {
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
      const activityData = {
        type: activityType,
        duration: numericDuration,
        date: selectedDate.toISOString(),
        isSpecial,
      };
      try {
        if (isEditMode) {
          await updateActivityById(route.params.activityId, activityData);
        } else {
          await addActivityToDB(activityData);
        } navigation.navigate('AllActivities');
      }
      catch (error) {
        console.log('Error adding activity', error);
      }
    };
    if (isEditMode) {
      Alert.alert(
        "Important", // Title
        "Are you sure you want to save these changes?", // Message
        [
          {
            text: "No",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "Yes", onPress: () => proceedWithSave() } // Proceed with saving
        ]
      );
    }else {
      proceedWithSave();
    }
    if (isChecked) { 
      isSpecial = false;
      console.log('isSpecial', isSpecial);
    
    } 
  };

 

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

  
  const deleteHandler = async (activityId) => {
   Alert.alert(
      "Delete",
      "Are you sure you want to delete this item?",
      [
        {
          text: "No",
          onPress: () => console.log("Deletion cancelled"),
        },
        {
          text: "Yes",
          onPress: async () => {
            await deleteFromDB(activityId);
            navigation.goBack();
          },
        }
      ]
    );
  }

  useEffect(() => {
    const showDeleteButton = isEditMode ? () => (
    <PressableButton
      onPressFunction={() => deleteHandler(route.params.activityId)}
      customStyle={styles.deleteButtonStyle}>
      <AntDesign name="delete" size={24} color="white" />
    </PressableButton>
  ) : null; 
  navigation.setOptions({
    headerRight: showDeleteButton,
    headerStyle: { backgroundColor: colors.darkpurple },
    headerTintColor: 'white',
  });
  }, [navigation, isEditMode, route.params?.activityId]);

const handlecheckbox = () => {
  setChecked(!isChecked);

    };

  return (
    <View style={styles.container}>
      <View style={styles.edit}>
        <Text style={GlobalStyles.lable}>Activity *</Text>
        <ActivityDropDownPicker
          onActivityChange={setActivityType} 
          activityType={activityType}  />
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
      <View style={styles.bottomContainer}>
        {ShowCheckbox && (
          <View style={styles.checkboxContainer}>
          <Text style={styles.checkboxLabel}>not mark as Special Activity</Text>
          <Checkbox
              value={isChecked}
              onValueChange={
              handlecheckbox}
            color={isChecked ? colors.darkpurple : undefined}
          />
        </View>)}
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
  },
  deleteButtonStyle: {
    backgroundColor: 'transparent',
    alignItems: 'flex-end',
  },
  checkboxContainer: {
    flexDirection: "row",
    marginRight: 30,
    padding: 10,
  },

  bottomContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 200,
  },
  checkboxLabel: { 
    fontSize: 16,
    marginLeft: 40,
    alignItems: "center",
    marginEnd: 20,
    color: colors.darkpurple,
    fontWeight: "bold",
   },
}
);

export default AddAnActivity;