import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Styles from '../Styles.jsx';

function ToDoForm() {
  return (
    <View style={Styles.form}>
      <TextInput
        style={Styles.input}
        placeholder="Add a new task..."
      />
      <Button title="Add" />
    </View>
  );
}

export default ToDoForm;

