import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button
} from 'react-native';
import { styled } from 'nativewind';
import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const StyledText = styled(Text)

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
      }]);
      endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }

  return (
    <View style={styles.appContainer}>
      {/* <Text style={styles.dummyText}>Another piece of text</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title='Click me!'  /> */}
      <Button title="Add New Goal" color="#000" onPress={startAddGoalHandler} />

      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />

      <View style={styles.goalsContainer}>
            <FlatList
                data={courseGoals}
                renderItem={(itemData) => {
                    return (
                        <GoalItem 
                          text={itemData.item.text}
                          id={itemData.item.id}
                          onDeleteItem={deleteGoalHandler} />
                    );
                }}
                keyExtractor={(item, index) => {
                    return item.id;
                }}
                alwaysBounceVertical={false}
            />
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
        flex: 4,
    },
  
});
