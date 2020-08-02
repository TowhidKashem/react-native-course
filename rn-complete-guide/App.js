import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Button,
  ScrollView,
  FlatList,
  Modal,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import GoalItem from "./components/GoalItem";
import Goalnput from "./components/Goalnput";
import Header from "./components/Header";

const fetchFonts = () =>
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

export default function App() {
  const [num, setNum] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded)
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setDataLoaded(true);
        }}
        onError={(error) => console.log(error)}
      />
    );

  return (
    <>
      <View styles={styles.screen}>
        <Header title="Guess a number" />
      </View>
      <Image
        source={require("./assets/success.png")}
        style={{
          width: 300,
          height: 300,
          marginTop: 20,
          borderRadius: 150,
        }}
        resizeMode="contain"
      />
      <Text numberOfLines={1} ellipsizeMode="tail">
        This text will never wrap into a new line, instead it will be cut off
        like this if it is too lon...
      </Text>
      <Image
        source={{
          uri:
            "https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg",
          width: 300,
          height: 300,
        }}
      />
      <TouchableHighlight onPress={() => setNum(num + 1)}>
        <View
          style={{
            borderWidth: 1,
            borderColor: "black",
            height: "100%",
            padding: 100,
          }}
        >
          <Text>{num}</Text>
        </View>
      </TouchableHighlight>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: 200,
    flex: 1,
  },
});

// export default function App() {
//   const [enteredGoal, setEnteredGoal] = useState("");
//   const [goals, setGoals] = useState([]);
//   const [showAddModal, setShowAddModal] = useState(false);

//   const updateGoal = (goal) => setEnteredGoal(goal);

//   const addGoal = () => {
//     setGoals((curGoals) => [
//       ...curGoals,
//       {
//         uuid: Math.floor(Math.random() * 100) + 1,
//         value: enteredGoal,
//       },
//     ]);
//     setShowAddModal(false);
//     setEnteredGoal("");
//   };

//   const deleteGoal = (id) => {
//     setGoals(goals.filter(({ uuid }) => uuid !== id));
//   };

//   return (
//     <View style={{ padding: 50 }}>
//       <Button title="Add Item" onPress={() => setShowAddModal(true)} />

//       <Modal
//         visible={showAddModal}
//         animationType="slide"
//         style={styles.addModal}
//       >
//         <View style={styles.container}>
//           <Goalnput updateGoal={updateGoal} enteredGoal={enteredGoal} />
//           <View>
//             <Button title="Add" onPress={addGoal} />
//             <Button
//               title="Cancel"
//               onPress={() => setShowAddModal(false)}
//               color="red"
//             />
//           </View>
//         </View>
//       </Modal>

//       <FlatList
//         keyExtractor={(item, index) => item.uuid}
//         data={goals}
//         renderItem={(goal) => <GoalItem goal={goal} onDelete={deleteGoal} />}
//       />

//       {/* <ScrollView>
//         {goals.map((goal) => (
//           <View key={goal} styles={styles.item}>
//             <Text>{goal}</Text>
//           </View>
//         ))}
//       </ScrollView> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     flex: 1,
//     padding: 10,
//   },
//   addModal: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
