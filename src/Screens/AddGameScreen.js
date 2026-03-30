import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../styles/AddGameStyles';

export default function AddGameScreen() {
  // form states
  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState('');
  const [ageRating, setAgeRating] = useState('');

  const [isValid, setIsValid] = useState(false);

  // validate form when inputs change
  useEffect(() => {
    const priceIsNumber = !isNaN(price) && price !== '';

    if (title && platform && genre && ageRating && priceIsNumber) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [title, platform, genre, price, ageRating]);

  // submit form
  const handleAddGame = () => {
    Alert.alert(
      'Juego agregado',
      `Título: ${title}
      Plataforma: ${platform}
      Género: ${genre}
      Precio: ${price}
      Clasificación: ${ageRating}`,
    );
  };

  // reset form
  const handleClear = () => {
    setTitle('');
    setPlatform('');
    setGenre('');
    setPrice('');
    setAgeRating('');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Text style={styles.title}>Agregar videojuego</Text>

        <TextInput
          style={styles.input}
          placeholder="Título del juego"
          value={title}
          onChangeText={setTitle}
        />

        <TextInput
          style={styles.input}
          placeholder="Plataforma (PS5, Xbox, PC...)"
          value={platform}
          onChangeText={setPlatform}
        />

        <TextInput
          style={styles.input}
          placeholder="Género"
          value={genre}
          onChangeText={setGenre}
        />

        <TextInput
          style={styles.input}
          placeholder="Precio"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Clasificación (E, T, M)"
          value={ageRating}
          onChangeText={setAgeRating}
        />

        <TouchableOpacity
          style={[styles.button, !isValid && styles.disabledButton]}
          onPress={handleAddGame}
          disabled={!isValid}
        >
          <Text style={styles.buttonText}>Agregar Juego</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <Text style={styles.clearText}>Limpiar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
