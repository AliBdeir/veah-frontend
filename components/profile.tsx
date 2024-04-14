import { View, Text, Animated, TouchableOpacity } from "react-native";
import React, { useState, useRef } from "react";
import Form from "./form";

export default function Profile() {
  const rotateValue = useRef(new Animated.Value(0)).current; // Holds the animation state

  // Function to start the rotation animation
  const startRotation = () => {
    // Rotate the view 45 degrees
    Animated.timing(rotateValue, {
      toValue: 1, // Animate to full rotation
      duration: 300, // Animation can last 500 milliseconds
      useNativeDriver: true, // Use native driver for better performance
    }).start(() => {
      rotateValue.setValue(0); // Reset rotation smoothly
    });
  };

  // Interpolate rotation in degrees
  const rotateData = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "45deg"], // Change degrees here as needed
  });
  return (
    <View className="flex-1 ">
      {/* Title */}
      {/* <View className="flex flex-row justify-between items-center px-4">
        <Text className="text-white text-4xl font-bold">Profile</Text>
        <TouchableOpacity
          className="p-4 items-center justify-center bg-transparent"
          onPress={() => {
            console.log("close initiated");
            startRotation();
          }}
        >
          <Animated.Text
            className="text-white text-4xl font-bold"
            style={{ transform: [{ rotate: rotateData }] }}
          >
            X
          </Animated.Text>
        </TouchableOpacity>
      </View> */}
      <Form />
    </View>
  );
}
