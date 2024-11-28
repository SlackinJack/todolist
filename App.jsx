import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './modules/ToDoList.jsx';
import ToDoForm from './modules/ToDoForm.jsx';
import Styles from './Styles.jsx';

function App() {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);

    const addTask = (taskText) => {
      setTasks([...tasks, taskText]);
    };
    
    return (
        <SafeAreaView>
            <ToDoList tasks={tasks} />
            <ToDoForm addTask={addTask} />
        </SafeAreaView>
    );
}

export default App;

