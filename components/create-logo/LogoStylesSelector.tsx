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
import { s } from '@/utils/responsive';
import { useTheme } from '@/hooks/useTheme';

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
  const { theme } = useTheme();

  const logoImages: Record<string, any> = {
    abstract: require('../../assets/images/logos/abstract.png'),
    mascot: require('../../assets/images/logos/mascot.png'),
    monogram: require('../../assets/images/logos/monogram.png'),
    'no-logo': require('../../assets/images/logos/no-logo.png'),
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

        setStylesList(styles =>
          data.map((style: LogoStyle) => ({
            key: style.key,
            label: style.label,
            url: style.url,
          }))
        );
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
      <Text
        style={{
          ...theme.typography.heading,
          color: theme.colors.white100,
          fontSize: s(20),
        }}
      >
        Logo Styles
      </Text>
      {loading && (
        <View style={{ marginTop: s(12), alignItems: 'center' }}>
          <ActivityIndicator color="white" />
        </View>
      )}

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        {stylesList.map(logo => (
          <TouchableOpacity
            key={logo.key}
            style={[styles.styleItem]}
            onPress={() => onSelect(logo.label)}
            activeOpacity={0.7}
          >
            {/* Display logo image if url exists, otherwise fallback */}
            {logo.url ? (
              <View style={{ marginBottom: 8 }}>
                <Image
                  source={logoImages[logo.url]}
                  style={[
                    {
                      width: s(90),
                      height: s(90),
                      borderRadius: 16,
                    },
                    selected === logo.label ? styles.selectedStyle : {},
                  ]}
                  resizeMode="contain"
                />
              </View>
            ) : (
              <View style={styles.iconPlaceholder} />
            )}
            <Text
              style={[
                {
                  ...theme.typography.body,
                  fontSize: s(13),
                },
                selected === logo.label
                  ? { ...styles.styleLabel, color: theme.colors.white100 }
                  : { ...styles.styleLabel, color: theme.colors.dark500 },
              ]}
            >
              {logo.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: s(24),
  },

  scroll: {
    flexGrow: 0,
    marginTop: s(12),
  },
  styleItem: {
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 16,
  },
  selectedStyle: {
    borderColor: 'white',
    borderWidth: 2,
  },

  styleLabel: {
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
  },
  iconPlaceholder: {
    width: s(90),
    height: s(90),
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginBottom: 8,
  },
});
