import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './modules/ToDoList.jsx';
import ToDoForm from './modules/ToDoForm.jsx';
import Styles from './Styles.jsx';

function App() {
    const [tasks, setTasks] = useState(
        [
            'Do laundry',
            'Go to gym',
            'Walk dog'
        ]
    );
    
    return (
        <SafeAreaView>
            <ToDoList tasks={tasks} />
            <ToDoForm />
        </SafeAreaView>
    );
}

export default App;

