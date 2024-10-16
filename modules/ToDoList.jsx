import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import Styles from '../Styles.jsx';

function ToDoList() {
  return (
    <ScrollView>
      <Pressable>
        <View style={[Styles.task, Styles.completed]}>
          <Text style={Styles.taskText}>Do laundry</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={[Styles.task]}>
          <Text style={Styles.taskText}>Go to gym</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={[Styles.task, Styles.completed]}>
          <Text style={Styles.taskText}>Walk dog</Text>
        </View>
      </Pressable>
    </ScrollView>
  );
}

export default ToDoList;

