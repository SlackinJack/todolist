import { View, Text, Pressable, ScrollView } from 'react-native';
import Styles from '../Styles.jsx';

function ToDoList({ tasks }) {
    return (
        <ScrollView>
            {
                tasks.map(
                    (task, index) => (
                        <Pressable key={index}>
                          <View style={[Styles.task]}>
                            <Text style={Styles.taskText}>{task}</Text>
                          </View>
                        </Pressable>
                    )
                )
            }
        </ScrollView>
    );
}

export default ToDoList;

