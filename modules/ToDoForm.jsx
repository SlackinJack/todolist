import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Styles from '../Styles.jsx';

function ToDoForm({ addTask }) {
    const [taskText, setTaskText] = React.useState('');

    return (
        <View style={Styles.form}>
            <TextInput 
              style={Styles.input} 
              placeholder="Add a new task..." 
              onChangeText={(text) => setTaskText(text)}
              value={taskText}
            />
            <Button title="Add Task" onPress={() => addTask(taskText)} />
        </View>
    );
}

export default ToDoForm;

