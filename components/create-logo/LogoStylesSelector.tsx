import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { app, functions } from '@/config/firebase';
import { useAuth } from '@/contexts/AuthContext';

interface LogoStyle {
  key: string;
  label: string;
  icon: any; // Replace with appropriate type for icon
}

export function LogoStylesSelector({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (key: string) => void;
}) {
  const [stylesList, setStylesList] = useState<LogoStyle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const getLogoStyles = httpsCallable(functions, 'getLogoStyles');
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      console.error('User not authenticated');
      return;
    }
    const fetchStyles = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getLogoStyles();
        const styles = response.data as LogoStyle[];
        setStylesList(styles);
      } catch (err) {
        console.error('Error fetching logo styles:', err);
        setError('Failed to load logo styles');
      } finally {
        setLoading(false);
      }
    };

    fetchStyles();
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logo Styles</Text>

      {error && <Text style={{ color: 'red', marginVertical: 16 }}>{error}</Text>}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        {stylesList.map(style => (
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
