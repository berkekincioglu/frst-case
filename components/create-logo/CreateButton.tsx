import { s } from '@/utils/responsive';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ActivityIndicator } from 'react-native';

export function CreateButton({ onPress, loading }: { onPress: () => void; loading?: boolean }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={loading}
    >
      <View style={styles.innerRow}>
        <Text style={styles.text}>Create</Text>
        <Text style={styles.sparkle}>✨</Text>
        {loading ? <ActivityIndicator color="white" style={{ marginLeft: 8 }} /> : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 'auto',
    marginBottom: s(24),
    backgroundColor: 'blue',
    borderRadius: 32,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 6,
  },
  sparkle: {
    fontSize: 18,
    color: 'white',
  },
});
