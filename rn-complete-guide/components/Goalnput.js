import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function GoalInput({ updateGoal, enteredGoal }) {
  return (
    <TextInput
      placeholder="Course Goal"
      style={styles.textField}
      onChangeText={updateGoal}
      value={enteredGoal}
    />
  );
}

const styles = StyleSheet.create({
  textField: {
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
  },
});
