import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/AddGameStyles';

export default function AddGameScreen() {
  // states for each input field
  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState('');
  const [ageRating, setAgeRating] = useState('');
  const [image, setImage] = useState('');
  const [isValid, setIsValid] = useState(false);

  // validate the form in real-time
  useEffect(() => {
    const priceIsNumber = !isNaN(price) && price !== '';
    if (title && platform && genre && ageRating && priceIsNumber) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [title, platform, genre, price, ageRating]);

  // show the alert when adding a game
  const handleAddGame = () => {
    Alert.alert(
      'Game added',
      `Title: ${title}
      Platform: ${platform}
      Genre: ${genre}
      Price: ${price}
      Rating: ${ageRating}
      Image URL: ${image}`,
    );
  };

  // clear all input fields
  const handleClear = () => {
    setTitle('');
    setPlatform('');
    setGenre('');
    setPrice('');
    setAgeRating('');
    setImage('');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Añadir videojuego</Text>

          <TextInput
            style={styles.input}
            placeholder="Game title"
            placeholderTextColor="#EEE"
            value={title}
            onChangeText={setTitle}
          />

          <TextInput
            style={styles.input}
            placeholder="Platform (PS5, Xbox, PC...)"
            placeholderTextColor="#EEE"
            value={platform}
            onChangeText={setPlatform}
          />

          <TextInput
            style={styles.input}
            placeholder="Genre"
            placeholderTextColor="#EEE"
            value={genre}
            onChangeText={setGenre}
          />

          <TextInput
            style={styles.input}
            placeholder="Price"
            placeholderTextColor="#EEE"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            placeholder="Rating (E, T, M)"
            placeholderTextColor="#EEE"
            value={ageRating}
            onChangeText={setAgeRating}
          />

          <TextInput
            style={styles.input}
            placeholder="Image URL"
            placeholderTextColor="#EEE"
            value={image}
            onChangeText={setImage}
          />

          <TouchableOpacity
            style={[styles.button, !isValid && styles.disabledButton]}
            onPress={handleAddGame}
            disabled={!isValid}
          >
            <Text style={styles.buttonText}>Añadir juego</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
            <Text style={styles.clearText}>Limpiar</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
