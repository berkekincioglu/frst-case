import { useTheme } from '@/hooks/useTheme';
import { s, vs } from '@/utils/responsive';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export function AppHeader() {
  const { theme } = useTheme();

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Text
          style={{
            ...theme.typography.heading,
            color: theme.colors.white,
          }}
        >
          AI Logo
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    height: vs(60),
  },
});
