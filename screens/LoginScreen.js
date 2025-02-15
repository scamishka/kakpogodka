import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';

const LoginScreen = () => {
  const handleGoogleLogin = () => {
    Alert.alert('Google', 'Авторизация через Google');
    // Здесь будет логика для авторизации через Google
  };

  const handleVKLogin = () => {
    Alert.alert('VK', 'Авторизация через VK');
    // Здесь будет логика для авторизации через VK
  };

  const handlePinterestLogin = () => {
    Alert.alert('Pinterest', 'Авторизация через Pinterest');
    // Здесь будет логика для авторизации через Pinterest
  };

  const handleYandexLogin = () => {
    Alert.alert('Yandex', 'Авторизация через Yandex');
    // Здесь будет логика для авторизации через Yandex
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      <Text style={styles.title}>Добро пожаловать!</Text>
      <Text style={styles.subtitle}>Войдите, чтобы продолжить</Text>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
          <Image source={require('../assets/icons/google.png')} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleVKLogin}>
          <Image source={require('../assets/icons/vk.png')} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton} onPress={handlePinterestLogin}>
          <Image source={require('../assets/icons/pinterest.png')} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleYandexLogin}>
          <Image source={require('../assets/icons/ya.png')} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e1f5ff',
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain', // Чтобы логотип не искажался
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%', // Уменьшили ширину для компактного расположения иконок
  },
});

export default LoginScreen;