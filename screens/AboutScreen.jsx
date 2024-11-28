import { Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen() {
  const d = new Date();
  const date = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  return (
    <MainLayout>
      <Text>About screen</Text>
      <Text>TodoList app</Text>
      <Text>created by SlackinJack 000911952</Text>
      <Text>Today's Date {year} {month + 1} {date}</Text>
    </MainLayout>
  );
}

export default AboutScreen;

