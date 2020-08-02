import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  ScrollView,
  FlatList,
  Modal,
} from "react-native";
import GoalItem from "./components/GoalItem";
import Goalnput from "./components/Goalnput";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  const updateGoal = (goal) => setEnteredGoal(goal);

  const addGoal = () => {
    setGoals((curGoals) => [
      ...curGoals,
      {
        uuid: Math.floor(Math.random() * 100) + 1,
        value: enteredGoal,
      },
    ]);
    setShowAddModal(false);
    setEnteredGoal("");
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(({ uuid }) => uuid !== id));
  };

  return (
    <View style={{ padding: 50 }}>
      <Button title="Add Item" onPress={() => setShowAddModal(true)} />

      <Modal
        visible={showAddModal}
        animationType="slide"
        style={styles.addModal}
      >
        <View style={styles.container}>
          <Goalnput updateGoal={updateGoal} enteredGoal={enteredGoal} />
          <View>
            <Button title="Add" onPress={addGoal} />
            <Button
              title="Cancel"
              onPress={() => setShowAddModal(false)}
              color="red"
            />
          </View>
        </View>
      </Modal>

      <FlatList
        keyExtractor={(item, index) => item.uuid}
        data={goals}
        renderItem={(goal) => <GoalItem goal={goal} onDelete={deleteGoal} />}
      />

      {/* <ScrollView>
        {goals.map((goal) => (
          <View key={goal} styles={styles.item}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    padding: 10,
  },
  addModal: {
    justifyContent: "center",
    alignItems: "center",
  },
});
