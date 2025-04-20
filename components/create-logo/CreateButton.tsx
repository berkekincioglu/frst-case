import { useTheme } from '@/hooks/useTheme';
import { StarsIcon } from '@/utils/icons';
import { s } from '@/utils/responsive';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ActivityIndicator } from 'react-native';

export function CreateButton({ onPress, loading }: { onPress: () => void; loading?: boolean }) {
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={loading}
    >
      <LinearGradient
        // 4 stops from Figma at 25%, 71%, 87%, 100%
        colors={[
          theme.colors.purple1000,
          theme.colors.purple700,
          theme.colors.purple600,
          theme.colors.darkBlue,
        ]}
        locations={[0.25, 0.71, 0.87, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.gradient, { borderRadius: s(24) }]}
      >
        <View style={styles.innerRow}>
          <Text
            style={{
              ...theme.typography.heading,
              color: theme.colors.white100,
              fontSize: s(17),
            }}
          >
            Create
          </Text>
          <StarsIcon />
          {loading ? <ActivityIndicator color="white" style={{ marginLeft: 8 }} /> : null}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 'auto',
    marginHorizontal: s(24),
    marginBottom: s(24),
    borderRadius: s(24),
    height: s(46),
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    marginTop: 'auto',
    marginHorizontal: s(24),
    overflow: 'hidden', // very important so the gradient is clipped to the rounded corners
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s(8),
  },
  gradient: {
    height: s(46),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 6,
  },
});
