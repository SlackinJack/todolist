import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

function HomeScreen() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
  const addTask = (taskText) => {
      setTasks([...tasks, taskText]);
    };
  return (
    <MainLayout>
      <ToDoList tasks={tasks}/>
      <ToDoForm addTask={addTask}/>
    </MainLayout>
  );
}

export default HomeScreen;

