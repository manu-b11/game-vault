import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import styles from '../styles/GameDetailStyles';

const GameDetailScreen = ({ route, navigation }) => {
  const { game } = route.params;

  const [isFavorite, setIsFavorite] = useState(false);

  // Runs every time the selected game changes
  useEffect(() => {
    console.log('Game changed:', game.title);
  }, [game]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{game.title}</Text>

        <Text style={styles.text}>Plataforma: {game.platform}</Text>
        <Text style={styles.text}>Género: {game.genre}</Text>
        <Text style={styles.text}>Precio: ${game.price}</Text>

        {game.ageRating && (
          <Text style={styles.text}>Clasificación: {game.ageRating}</Text>
        )}

        {game.description && (
          <Text style={styles.text}>Descripción: {game.description}</Text>
        )}

        <Text style={styles.favoriteText}>
          {isFavorite ? 'En favoritos' : 'No es favorito'}
        </Text>

        <View style={styles.buttonSpacing}>
          <Button
            title="Agregar a favoritos"
            onPress={() => setIsFavorite(!isFavorite)}
          />
        </View>

        <View style={styles.buttonSpacing}>
          <Button title="Volver" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GameDetailScreen;
