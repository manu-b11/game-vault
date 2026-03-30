import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from '../styles/GameListStyles';

const GameListScreen = ({ navigation }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load games when component mounts
  useEffect(() => {
    setTimeout(() => {
      const mockGames = [
        {
          id: '1',
          title: 'The Last of Us',
          platform: 'PS5',
          genre: 'Acción',
          price: 70,
          ageRating: 'M',
          description:
            'Historia de supervivencia en un mundo postapocalíptico junto a Ellie',
        },
        {
          id: '2',
          title: 'The Sims 4',
          platform: 'PC',
          genre: 'Simulación',
          price: 40,
          ageRating: 'T',
          description:
            'Simulador de vida donde puedes crear y controlar personajes',
        },
        {
          id: '3',
          title: 'Silent Hill 2',
          platform: 'PS5',
          genre: 'Terror',
          price: 60,
          ageRating: 'M',
          description:
            'Terror psicológico en una ciudad cubierta de niebla llena de misterios',
        },
        {
          id: '4',
          title: 'Life is Strange',
          platform: 'PC',
          genre: 'Aventura',
          price: 40,
          ageRating: 'M',
          description:
            'Historia emocional basada en decisiones con viajes en el tiempo',
        },
        {
          id: '5',
          title: 'Hollow Knight',
          platform: 'Switch',
          genre: 'Acción',
          price: 30,
          ageRating: 'T',
          description:
            'Metroidvania desafiante en un mundo oscuro y misterioso',
        },
      ];

      setGames(mockGames);
      setLoading(false);
    }, 2000);
  }, []);

  // Render each game item
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('GameDetail', { game: item })}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text>🎮 Plataforma: {item.platform}</Text>
      <Text>🕹️ Género: {item.genre}</Text>
    </TouchableOpacity>
  );

  // Show loading indicator
  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
        <Text style={styles.loadingText}>Cargando juegos...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default GameListScreen;
