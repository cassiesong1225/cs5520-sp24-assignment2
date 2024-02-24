import React, { useState,useEffect } from "react";
import { StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const activities = [
  { label: "Running", value: "Running" },
  { label: "Walking", value: "Walking" },
  { label: "Swimming", value: "Swimming" },
  { label: "Weights", value: "Weights" },
  { label: "Yoga", value: "Yoga" },
  { label: "Cycling", value: "Cycling" },
  { label: "Hiking", value: "Hiking" },
];

export default function ActivityDropDownPicker({ onActivityChange,activityType }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(activityType);

  useEffect(() => {
    setValue(activityType);
  }, [activityType]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={activities}
      setOpen={setOpen}
      setValue={(activity) => {
        setValue(activity);
        onActivityChange(activity);
      }}
      placeholder="Select An Activity"
      style={styles.container}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AAA8C8',
    marginBottom: 20,
  },
})