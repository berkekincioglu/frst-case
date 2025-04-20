import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { s } from '@/utils/responsive';
import { useTheme } from '@/hooks/useTheme';
import { LinearGradient } from 'expo-linear-gradient';

export type StatusType = 'pending' | 'processing' | 'done' | 'error';

interface StatusChipProps {
  status: StatusType;
  onPress?: () => void;
  logoUrl?: string; // for done state
  eta?: string; // for processing state
}

function ProcessingContent({ eta }: { eta?: string }) {
  const { theme } = useTheme();

  return (
    <View style={styles.wrapper}>
      {/* LEFT ICON PANE */}
      <View
        style={[
          styles.left,
          {
            backgroundColor: theme.colors.dark100, // dark2000 in dark, white100 in light
            borderTopLeftRadius: 18,
            borderBottomLeftRadius: 18,
          },
        ]}
      >
        <ActivityIndicator color={theme.colors.white100} />
      </View>

      {/* RIGHT GRADIENT PANE */}
      <LinearGradient
        colors={[theme.colors.purple1000_05, theme.colors.darkBlue1000_05]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[
          styles.right,
          {
            backgroundColor: theme.colors.dark2000,
            borderTopRightRadius: 18,
            borderBottomRightRadius: 18,
            paddingLeft: s(8),
          },
        ]}
      >
        <Text
          style={[
            styles.title,
            {
              ...theme.typography.heading,
              color: theme.colors.white100,
              fontSize: s(16),
            },
          ]}
        >
          Creating Your Design...
        </Text>
        <Text
          style={{
            ...theme.typography.body,
            color: theme.colors.white100,
            fontSize: s(13),
          }}
        >
          Ready in {eta ?? '2 minutes'}
        </Text>
      </LinearGradient>
    </View>
  );
}

function DoneContent({ logoUrl }: { logoUrl?: string }) {
  const { theme } = useTheme();

  return (
    <View style={styles.wrapper}>
      {/* LEFT WHITE HALF */}
      <View style={[styles.left, { borderTopLeftRadius: 18, borderBottomLeftRadius: 18 }]}>
        {logoUrl ? (
          <Image source={{ uri: logoUrl }} style={styles.logoImg} />
        ) : (
          <View style={[styles.logoImg, { backgroundColor: '#fff' }]} />
        )}
      </View>

      {/* RIGHT GRADIENT HALF */}
      <LinearGradient
        colors={[theme.colors.darkBlue, theme.colors.purple1000]}
        locations={[0, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.right, { borderTopRightRadius: 18, borderBottomRightRadius: 18 }]}
      >
        <Text
          style={[
            styles.title,
            {
              ...theme.typography.heading,
              color: theme.colors.white100,
              fontSize: s(16),
            },
          ]}
        >
          Your Design is Ready!
        </Text>
        <Text
          style={{
            ...theme.typography.body,
            color: theme.colors.white100,
            fontSize: s(13),
          }}
        >
          Tap to see it.
        </Text>
      </LinearGradient>
    </View>
  );
}

function ErrorContent() {
  const { theme } = useTheme();

  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.left,
          {
            backgroundColor: theme.colors.red1000 + '70',
            borderTopLeftRadius: 18,
            borderBottomLeftRadius: 18,
          },
        ]}
      >
        <MaterialIcons name="error-outline" size={28} color="white" />
      </View>

      {/* RIGHT RED PANE */}
      <View
        style={[
          styles.right,
          {
            backgroundColor: theme.colors.red1000,
            borderTopRightRadius: 18,
            borderBottomRightRadius: 18,
          },
        ]}
      >
        <Text
          style={[
            styles.title,
            {
              ...theme.typography.heading,
              color: theme.colors.white100,
              fontSize: s(16),
            },
          ]}
        >
          Oops, something went wrong!
        </Text>
        <Text
          style={{
            ...theme.typography.body,
            color: theme.colors.white100,
            fontSize: s(13),
          }}
        >
          Click to try again.
        </Text>
      </View>
    </View>
  );
}

export function StatusChip({ status, onPress, logoUrl, eta }: StatusChipProps) {
  if (status === 'pending') return null;

  let content;
  let isPressable = false;

  switch (status) {
    case 'error':
      content = <ErrorContent />;
      isPressable = true;
      break;
    case 'processing':
      content = <ProcessingContent eta={eta} />;
      break;
    case 'done':
      content = <DoneContent logoUrl={logoUrl} />;
      isPressable = true;
      break;
  }

  return (
    <TouchableOpacity
      style={[styles.chip]}
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
    paddingHorizontal: s(24),
  },
  wrapper: {
    flexDirection: 'row',
    overflow: 'hidden', // clip children to the pill shape
  },
  left: {
    width: 72, // enough for a 48px icon + padding
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingVertical: s(16),
    paddingHorizontal: s(8),
  },
  iconBox: {
    width: 72,
    height: 72,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    overflow: 'hidden',
  },
  logoImg: {
    width: 72,
    height: 72,
    resizeMode: 'cover',
    backgroundColor: '#fff',
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
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
