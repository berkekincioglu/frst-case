import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useTheme } from '@/hooks/useTheme';
import { PageBackground } from '@/components/layout/PageBackground';

export default function LogoDetailPage() {
  const { id } = useLocalSearchParams();
  const { theme } = useTheme();
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
          Logo Detail Page
        </Text>
        <Text
          style={{
            ...theme.typography.body,
            color: theme.colors.text,
            backgroundColor: theme.colors.card,
            padding: theme.spacing.sm,
            borderRadius: theme.shape.borderRadius,
          }}
        >
          ID: {id}
        </Text>
      </View>
    </PageBackground>
  );
}
