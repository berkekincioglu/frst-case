import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Use your Gen2 HTTP function endpoint directly
const HELLO_WORLD_URL = 'https://helloworld-gqyah3fwsq-uc.a.run.app';

export function TestHelloFunction() {
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCall = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await fetch(HELLO_WORLD_URL);
      if (!response.ok) throw new Error('Network response was not ok');
      const text = await response.text();
      setResult(text);
    } catch (err: any) {
      setError(err.message || 'Error calling function');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleCall} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Calling...' : 'Call helloWorld (Gen2)'}</Text>
      </TouchableOpacity>
      {result && <Text style={styles.result}>Result: {result}</Text>}
      {error && <Text style={styles.error}>Error: {error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { margin: 24 },
  button: {
    backgroundColor: 'white',
    padding: 14,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  buttonText: { color: 'black', fontWeight: 'bold' },
  result: { color: 'green', marginTop: 8 },
  error: { color: 'red', marginTop: 8 },
});
