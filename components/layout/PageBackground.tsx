import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const backgroundImage = require('@/assets/images/back-gradient.png');

export function PageBackground({ children }: { children: React.ReactNode }) {
  return (
    <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.imageBackground}>
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
