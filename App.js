import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import api_client from './src/service/api';
import CardMovie from './src/components/CardMovie';
export default function App() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies();
  }, [])

  const getMovies = () => api_client.get('r-api/?api=filmes').then(res =>
    setMovies(res.data)
  ).finally(() => setLoading(false));

  return (
    <View style={styles.container}>
      {!loading ? (
        <FlatList
          data={movies}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <CardMovie movie={item} />}
        />
      ) : <ActivityIndicator size="large" color="#fff" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff'
  }
});
