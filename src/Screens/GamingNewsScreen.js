import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from '../styles/GamingNewsStyles';
import { GAMING_NEWS } from '../data/gamingNewsData';

const GamingNewsScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentNews, setCurrentNews] = useState(GAMING_NEWS[0]);

  // makes the news rotate automatically every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % GAMING_NEWS.length);
    }, 5000);

    return () => clearInterval(intervalId); // clean up so it doesn't keep running in the background
  }, []);

  useEffect(() => {
    setCurrentNews(GAMING_NEWS[currentIndex]);
  }, [currentIndex]);

  const handleNextNews = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % GAMING_NEWS.length);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.indicator}>
        Noticia {currentIndex + 1} de {GAMING_NEWS.length}
      </Text>

      <View style={styles.newsCard}>
        {currentNews.image && (
          <Image
            source={{ uri: currentNews.image }}
            style={styles.newsImage}
            resizeMode="cover"
          />
        )}
        <Text style={styles.newsTitle}>{currentNews.title}</Text>
        <Text style={styles.newsDescription}>{currentNews.description}</Text>
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={handleNextNews}>
        <Text style={styles.nextButtonText}>Siguiente noticia</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default GamingNewsScreen;
