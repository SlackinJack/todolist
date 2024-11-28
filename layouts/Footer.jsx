import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};

export default Footer;

