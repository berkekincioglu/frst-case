import { View, Text, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useTheme } from '@/hooks/useTheme';
import { PageBackground } from '@/components/layout/PageBackground';

export default function LogoDetailPage() {
  const { id, prompt, style, imageUrl } = useLocalSearchParams();
  const { theme } = useTheme();
  const mockOutputImage = require('@/assets/images/output.png');
  return (
    <PageBackground>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          padding: theme.spacing.lg,
        }}
      >
        <Text
          style={{
            ...theme.typography.heading,
            color: theme.colors.primary,
            marginBottom: theme.spacing.md,
          }}
        >
          Your Logo
        </Text>
        {imageUrl ? (
          <Image
            // source={{ uri: imageUrl as string  }}
            source={imageUrl ? { uri: imageUrl as string } : mockOutputImage}
            style={{ width: 180, height: 180, borderRadius: 24, marginBottom: theme.spacing.lg }}
            resizeMode="contain"
          />
        ) : null}
        <Text
          style={{
            ...theme.typography.body,
            color: theme.colors.text,
            backgroundColor: theme.colors.card,
            padding: theme.spacing.sm,
            borderRadius: theme.shape.borderRadius,
            marginBottom: theme.spacing.md,
          }}
        >
          ID: {id}
        </Text>
        {prompt ? (
          <Text style={{ ...theme.typography.body, color: theme.colors.text, marginBottom: 8 }}>
            <Text style={{ fontWeight: 'bold' }}>Prompt:</Text> {prompt}
          </Text>
        ) : null}
        {style ? (
          <Text style={{ ...theme.typography.body, color: theme.colors.text }}>
            <Text style={{ fontWeight: 'bold' }}>Style:</Text> {style}
          </Text>
        ) : null}
      </View>
    </PageBackground>
  );
}
