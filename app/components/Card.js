import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

export default function Card({ descricao, dataexame, preco, paciente, onPress, onDelete, onEdit }) {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onPress} style={styles.infoContainer}>
        <Text style={styles.title}>{descricao}</Text>
        <Text style={styles.text}>Data: {dataexame}</Text>
        <Text style={styles.text}>Preço: R$ {(parseFloat(preco) || 0).toFixed(2)}</Text>
        <Text style={styles.text}>Paciente: {paciente?.nome || 'Sem paciente'}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onEdit}
        style={styles.iconButton}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        accessibilityLabel="Editar exame"
        accessibilityRole="button"
      >
        <AntDesign name="edit" size={28} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onDelete}
        style={styles.iconButton}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        accessibilityLabel="Remover exame"
        accessibilityRole="button"
      >
        <FontAwesome name="remove" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  infoContainer: {
    flex: 1,
    marginRight: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
  iconButton: {
    paddingHorizontal: 8,
  },
});