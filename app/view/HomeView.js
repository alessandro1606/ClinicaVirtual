import { View, StyleSheet } from 'react-native';
import Button from '../components/Button.js';
import Header from './HeaderView.js';

export default function HomeView({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.buttons}>
        <MyButton
          title="exames"
          color= "red"
          onPress={() => navigation.navigate('exams')}
        />
        <MyButton title="Salvos" />
        <MyButton title="configurações" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    justifyContent: 'space-evenly',
    flex: 1,
    padding: 20,
  },
});