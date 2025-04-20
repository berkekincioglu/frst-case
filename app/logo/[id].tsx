import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useTheme } from '@/hooks/useTheme';
import { PageBackground } from '@/components/layout/PageBackground';
import { s } from '@/utils/responsive';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from '@expo/vector-icons/Feather';

export default function LogoDetailPage() {
  const { id, prompt, style, imageUrl } = useLocalSearchParams();
  const { theme } = useTheme();
  const mockOutputImage = require('@/assets/images/output.png');
  const router = useRouter();

  return (
    <PageBackground>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          marginHorizontal: s(24),
        }}
      >
        <View style={{ flex: 1, width: '100%', height: '100%' }}>
          {/* HEADER */}
          <View style={[styles.header]}>
            <Text
              style={{
                ...theme.typography.heading,
                color: theme.colors.white100,
                fontSize: s(22),
              }}
            >
              Your Design
            </Text>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close" size={24} color={theme.colors.white100} />
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', marginBottom: theme.spacing.lg }}>
            {imageUrl ? (
              <Image
                source={imageUrl ? { uri: imageUrl as string } : mockOutputImage}
                style={{
                  height: s(342),
                  borderRadius: 24,
                }}
                resizeMode="cover"
              />
            ) : null}
          </View>

          {prompt ? (
            <LinearGradient
              colors={[theme.colors.purple1000_05, theme.colors.darkBlue1000_05]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                marginTop: s(12),
                width: '100%',
                maxHeight: s(134),
                height: s(134),
                backgroundColor: theme.colors.dark2000,
                borderRadius: theme.shape.borderRadius,
                padding: s(12),
                gap: s(4),
              }}
            >
              {/* HEADER */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Text
                  style={{
                    color: theme.colors.white100,
                    ...theme.typography.body,
                  }}
                >
                  Prompt
                </Text>
                {/* Add copy */}
                <TouchableOpacity
                  onPress={() => {
                    // Copy to clipboard
                  }}
                  style={{
                    backgroundColor: theme.colors.dark2000,
                    padding: s(8),
                    borderRadius: theme.shape.borderRadius,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: s(4),
                  }}
                >
                  <Feather name="copy" size={16} color={theme.colors.dark500} />
                  <Text
                    style={{
                      color: theme.colors.dark500,
                      ...theme.typography.body,
                      fontSize: s(11),
                    }}
                  >
                    Copy
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: theme.colors.white100,
                    ...theme.typography.body,
                  }}
                >
                  {prompt}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: theme.colors.dark500,
                  height: s(24),
                  borderRadius: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                  maxWidth: s(76),
                }}
              >
                <Text
                  style={{
                    ...theme.typography.body,
                    color: theme.colors.white100,
                    fontSize: s(11),
                  }}
                >
                  {style}
                </Text>
              </View>
            </LinearGradient>
          ) : null}
        </View>
      </SafeAreaView>
    </PageBackground>
  );
}
const styles = StyleSheet.create({
  header: {
    paddingBottom: s(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
    paddingTop: 0,
  },
});
