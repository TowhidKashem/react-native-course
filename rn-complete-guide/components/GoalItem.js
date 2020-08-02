import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function GoalItem({ goal, onDelete }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onDelete(goal.item.uuid)}
    >
      <View styles={styles.item}>
        <Text>{goal.item.value}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
});
