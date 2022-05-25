import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

export default function CardMovie({ movie }) {

  return (
    <View style={styles.card}>
      <Text style={styles.text[1]}>{movie.nome}</Text>
      <Image style={styles.img} source={{ uri: movie.foto }} />
      <TouchableOpacity style={styles.button}
        onPress={() => Alert.alert(
          "Sinopse", //title
          movie.sinopse, //body
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel") //button
            },
            {
              text: "OK",
              onPress: () => console.log("OK") //button
            }
          ]
        )} >
        <Text style={styles.text[0]}>Ver mais</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  text: [{
    color: '#fff',
    textAlign: 'center',
  }, {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  }],
  img: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#3790d4',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
  }
});