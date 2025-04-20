import { useTheme } from '@/hooks/useTheme';
import { s } from '@/utils/responsive';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function PromptInput({
  value,
  onChangeText,
  maxLength = 500,
}: {
  value: string;
  onChangeText: (text: string) => void;
  maxLength?: number;
}) {
  const { theme } = useTheme();
  const [focused, setFocused] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Text
          style={{
            ...theme.typography.heading,
            color: theme.colors.white100,
            fontSize: s(20),
          }}
        >
          Enter Your Prompt
        </Text>
        <View style={styles.surprise}>
          <Text>🎲</Text>
          <Text
            style={{
              ...theme.typography.body,
              color: theme.colors.white100,
              fontSize: s(13),
            }}
          >
            Surprise me
          </Text>
        </View>
      </View>
      <LinearGradient
        colors={[theme.colors.purple1000_05, theme.colors.darkBlue1000_05]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          marginTop: s(12),
          maxHeight: s(175),
          minHeight: s(175),
          backgroundColor: theme.colors.dark2000,
          borderRadius: theme.shape.borderRadius,
          borderWidth: 1,
          borderColor: focused ? theme.colors.white : 'transparent',
        }}
      >
        <TextInput
          style={{
            flex: 1,
            borderRadius: theme.shape.borderRadius - s(1),
            padding: s(12),
            backgroundColor: 'transparent',
            color: theme.colors.white100,
            ...theme.typography.body,
            maxWidth: '90%',
          }}
          value={value}
          onChangeText={onChangeText}
          maxLength={maxLength}
          multiline
          placeholder="A blue lion logo reading 'HEXA' in bold letters"
          placeholderTextColor={theme.colors.dark500}
          textAlignVertical="top"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <Text
          style={{
            ...theme.typography.caption,
            fontSize: s(11),
            position: 'absolute',
            bottom: s(10),
            left: s(10),
            color: theme.colors.dark500,
          }}
        >
          {value.length}/{maxLength}
        </Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: s(24),
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },

  surprise: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  counter: {
    color: 'white',
    fontSize: 12,
    alignSelf: 'flex-end',
    marginTop: 4,
    opacity: 0.7,
  },
});
