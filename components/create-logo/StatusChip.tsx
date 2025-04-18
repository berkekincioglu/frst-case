import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export type StatusType = 'pending' | 'processing' | 'done' | 'error';

interface StatusChipProps {
  status: StatusType;
  onPress?: () => void;
  logoUrl?: string; // for done state
  eta?: string; // for processing state
}

function ProcessingContent({ eta }: { eta?: string }) {
  return (
    <>
      <View style={styles.iconBox}>
        <ActivityIndicator color="white" />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>Creating Your Design...</Text>
        <Text style={styles.subtitle}>Ready in {eta || '2 minutes'}</Text>
      </View>
    </>
  );
}

function DoneContent({ logoUrl }: { logoUrl?: string }) {
  return (
    <>
      <View style={styles.iconBox}>
        {logoUrl ? (
          <Image source={{ uri: logoUrl }} style={styles.logoImg} />
        ) : (
          <View style={[styles.logoImg, { backgroundColor: '#fff' }]} />
        )}
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>Your Design is Ready!</Text>
        <Text style={styles.subtitle}>Tap to see it.</Text>
      </View>
    </>
  );
}

function ErrorContent() {
  return (
    <>
      <View style={styles.iconBox}>
        <MaterialIcons name="error-outline" size={28} color="white" />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>Oops, something went wrong!</Text>
        <Text style={styles.subtitle}>Click to try again.</Text>
      </View>
    </>
  );
}

export function StatusChip({ status, onPress, logoUrl, eta }: StatusChipProps) {
  if (status === 'pending') return null;

  let content: React.ReactNode = null;
  let backgroundColor = '#23232a';
  let borderColor = 'transparent';
  let isPressable = false;

  switch (status) {
    case 'processing':
      content = <ProcessingContent eta={eta} />;
      backgroundColor = '#23232a';
      break;
    case 'done':
      content = <DoneContent logoUrl={logoUrl} />;
      backgroundColor = 'linear-gradient(90deg, #6366f1 0%, #a21caf 100%)';
      isPressable = true;
      break;
    case 'error':
      content = <ErrorContent />;
      backgroundColor = '#ef4444';
      borderColor = '#fff';
      isPressable = true;
      break;
  }

  return (
    <TouchableOpacity
      style={[styles.chip, { backgroundColor, borderColor }]}
      activeOpacity={isPressable ? 0.8 : 1}
      onPress={isPressable ? onPress : undefined}
      disabled={!isPressable}
    >
      {content}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 18,
    padding: 16,
    width: '100%',
    marginBottom: 24,
    borderWidth: 0,
    minHeight: 60,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    overflow: 'hidden',
  },
  logoImg: {
    width: 48,
    height: 48,
    borderRadius: 12,
    resizeMode: 'cover',
    backgroundColor: '#fff',
  },
  textBox: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  subtitle: {
    color: 'white',
    fontSize: 13,
    opacity: 0.8,
  },
});
