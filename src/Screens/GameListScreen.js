import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import styles from '../styles/GameListStyles';
import { colors } from '../styles/GlobalStyles';

const GameListScreen = ({ navigation }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const genreEmojis = {
    Acción: '🎮',
    Simulación: '🛠️',
    Terror: '😱',
    Aventura: '🗺️',
    RPG: '🛡️',
    Deportes: '⚽',
    Estrategia: '♟️',
  };

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
          image:
            'https://cdn.akamai.steamstatic.com/steam/apps/1888930/header.jpg',
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
          image:
            'https://cdn.akamai.steamstatic.com/steam/apps/1222670/header.jpg',
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
          image:
            'https://cdn.akamai.steamstatic.com/steam/apps/2124490/header.jpg',
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
          image:
            'https://cdn.akamai.steamstatic.com/steam/apps/319630/header.jpg',
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
          image:
            'https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg',
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
      activeOpacity={0.75}
      onPress={() => navigation.navigate('GameDetail', { game: item })}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.cardImage}
        resizeMode="cover"
      />
      <View style={styles.cardBody}>
        <View style={styles.cardTop}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {item.description}
          </Text>
        </View>
        <View style={styles.cardBottom}>
          <View style={styles.badgeRow}>
            <View style={styles.badgePurple}>
              <Text style={styles.badgeTextPurple}>{item.platform}</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                {genreEmojis[item.genre]} {item.genre}
              </Text>
            </View>
          </View>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.purple} />
        <Text style={styles.loadingText}>Cargando juegos...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logoText}>GameVault</Text>
      <Text style={styles.title}>Explora nuestro catálogo</Text>

      <FlatList
        data={games}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        style={{ width: '100%' }}
      />
    </SafeAreaView>
  );
};

export default GameListScreen;
