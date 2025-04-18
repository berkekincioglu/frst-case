import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const MOCK_STYLES = [
  { key: 'none', label: 'No Style', icon: null },
  { key: 'monogram', label: 'Monogram', icon: null },
  { key: 'abstract', label: 'Abstract', icon: null },
  { key: 'mascot', label: 'Mascot', icon: null },
  { key: 'emblem', label: 'Emblem', icon: null },
];

export function LogoStylesSelector({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (key: string) => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logo Styles</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        {MOCK_STYLES.map(style => (
          <TouchableOpacity
            key={style.key}
            style={[styles.styleItem, selected === style.key && styles.selectedStyle]}
            onPress={() => onSelect(style.key)}
            activeOpacity={0.7}
          >
            {/* Replace with icon/image if available */}
            <View style={styles.iconPlaceholder} />
            <Text style={styles.styleLabel}>{style.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
    color: 'white',
  },
  scroll: {
    flexGrow: 0,
  },
  styleItem: {
    alignItems: 'center',
    marginRight: 16,
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 16,
    padding: 12,
    backgroundColor: 'rgba(255,255,255,0.05)',
    minWidth: 80,
  },
  selectedStyle: {
    borderColor: 'white',
  },
  iconPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginBottom: 8,
  },
  styleLabel: {
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
  },
});
