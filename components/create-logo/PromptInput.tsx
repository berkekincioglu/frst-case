import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

export function PromptInput({
  value,
  onChangeText,
  maxLength = 500,
}: {
  value: string;
  onChangeText: (text: string) => void;
  maxLength?: number;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>Enter Your Prompt</Text>
        <Text style={styles.surprise}>🎲 Surprise me</Text>
      </View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        maxLength={maxLength}
        multiline
        placeholder="A blue lion logo reading 'HEXA' in bold letters"
        placeholderTextColor="#aaa"
        textAlignVertical="top"
      />
      <Text style={styles.counter}>
        {value.length}/{maxLength}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 8,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  surprise: {
    color: 'white',
    fontSize: 15,
    opacity: 0.8,
  },
  input: {
    minHeight: 100,
    maxHeight: 120,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 18,
    padding: 16,
    color: 'white',
    fontSize: 16,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  counter: {
    color: 'white',
    fontSize: 12,
    alignSelf: 'flex-end',
    marginTop: 4,
    opacity: 0.7,
  },
});
