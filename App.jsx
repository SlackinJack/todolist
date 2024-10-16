import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './modules/ToDoList.jsx';
import ToDoForm from './modules/ToDoForm.jsx';
import Styles from './Styles.jsx';

function App() {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;

