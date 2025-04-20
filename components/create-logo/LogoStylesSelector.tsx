import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';

import { useAuth } from '@/contexts/AuthContext';
import { GET_LOGO_STYLES_URL } from '@/utils/api';

interface LogoStyle {
  key: string;
  label: string;
  url: string;
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
  const { user } = useAuth();

  const logoImages: Record<string, any> = {
    abstract: require('../../assets/images/logos/abstract.png'),
    mascot: require('../../assets/images/logos/mascot.png'),
    monogram: require('../../assets/images/logos/monogram.png'),
    'no-logo': require('../../assets/images/logos/no-logo.png'),
    // Add all your logo keys here
  };

  useEffect(() => {
    if (!user) return;
    const fetchStyles = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(GET_LOGO_STYLES_URL);
        const data = await response.json();
        if (!response.ok) throw new Error('Network response was not ok');
        if (!data || !Array.isArray(data)) {
          throw new Error('Invalid data format');
        }

        // const styles = response.data as LogoStyle[];
        setStylesList(styles =>
          data.map((style: LogoStyle) => ({
            key: style.key,
            label: style.label,
            url: style.url, // Assuming icon is a valid property
          }))
        );
      } catch (err) {
        console.error('Error fetching logo styles:', err);
        setError('Failed to load logo styles');
      } finally {
        setLoading(false);
      }
    };

    // const handleCall = async () => {
    //   setLoading(true);
    //   setError(null);
    //   setResult(null);
    //   try {
    //     const response = await fetch(HELLO_WORLD_URL);
    //     if (!response.ok) throw new Error('Network response was not ok');
    //     const text = await response.text();
    //     setResult(text);
    //   } catch (err: any) {
    //     setError(err.message || 'Error calling function');
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    fetchStyles();
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logo Styles</Text>

      {error && <Text style={{ color: 'red', marginVertical: 16 }}>{error}</Text>}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        {stylesList.map(logo => (
          <TouchableOpacity
            key={logo.key}
            style={[styles.styleItem, selected === logo.key && styles.selectedStyle]}
            onPress={() => onSelect(logo.key)}
            activeOpacity={0.7}
          >
            {/* Display logo image if url exists, otherwise fallback */}
            {logo.url ? (
              <View style={{ marginBottom: 8 }}>
                <Image source={logoImages[logo.url]} style={styles.logoImg} resizeMode="contain" />
              </View>
            ) : (
              <View style={styles.iconPlaceholder} />
            )}
            <Text style={styles.styleLabel}>{logo.label}</Text>
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

  styleLabel: {
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
  },
  iconPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginBottom: 8,
  },
  logoImg: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginBottom: 8,
  },
});
