import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/GameDetailStyles';

const platformColors = {
  PS5: '#4B69FF',
  PC: '#27AE60',
  Switch: '#E74C3C',
  Xbox: '#107C10',
};

const genreColors = {
  Acción: '#FF6B6B',
  Aventura: '#FFA500',
  Simulación: '#3498DB',
  Terror: '#8E44AD',
  RPG: '#1ABC9C',
  Deportes: '#F1C40F',
  Estrategia: '#E67E22',
};

const GameDetailScreen = ({ route, navigation }) => {
  const { game } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  // Runs every time the selected game changes
  useEffect(() => {
    console.log('Game changed:', game.title);
  }, [game]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {game.image && (
          <Image source={{ uri: game.image }} style={styles.gameImage} />
        )}

        <View
          style={[
            styles.card,
            {
              borderLeftColor: platformColors[game.platform] || '#AAA',
              borderLeftWidth: 6,
            },
          ]}
        >
          <View style={styles.headerRow}>
            <Text style={styles.title}>{game.title}</Text>
            <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
              <Ionicons
                name={isFavorite ? 'heart' : 'heart-outline'}
                size={28}
                color={isFavorite ? '#FF4D6D' : '#AAA'}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.text}>Plataforma: {game.platform}</Text>

          <View style={{ flexDirection: 'row', marginBottom: 6 }}>
            <View
              style={[
                styles.genreBadge,
                {
                  backgroundColor:
                    genreColors[game.genre] ||
                    styles.genreBadge.backgroundColor,
                },
              ]}
            >
              <Text style={styles.genreText}>{game.genre}</Text>
            </View>
          </View>

          <Text style={styles.text}>Precio: ${game.price}</Text>

          {game.ageRating && (
            <Text style={styles.text}>Clasificación: {game.ageRating}</Text>
          )}

          {game.description && (
            <Text style={styles.text}>Descripción: {game.description}</Text>
          )}

          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsFavorite(!isFavorite)}
          >
            <Text style={styles.buttonText}>Agregar a favoritos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.buttonSecondary]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Volver</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GameDetailScreen;
