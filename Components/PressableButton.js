import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

export default function PressableButton({
  customStyle,
  onPressFunction,
  children,
}) {
  return (
    <Pressable
      onPress={onPressFunction}
      style={({ pressed }) => [
        styles.defaultStyle,
        customStyle,
        pressed && styles.pressed,
      ]}
     android_ripple={{ color: "rgba(0, 0, 0, 0.2)" }}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    borderRadius: 5,
    padding: 5,
    backgroundColor: "#aaa",
    width: 120,
  },
  pressed: {
    opacity: 0.5,
  },
});
