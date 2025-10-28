import { Image, StyleSheet, Text, View } from 'react-native';

export default function HeaderView() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}> Exames </Text>
      <Image style={styles.img} source={require('../../assets/images/snack-icon.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 30,
    elevation: 11,
    gap: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: 'white',
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
});