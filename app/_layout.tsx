import { AuthProvider } from '@/contexts/AuthContext';
import { Stack } from 'expo-router';
import { AppHeader } from '@/components/layout/Header';
import { StyleSheet, View } from 'react-native'; // Import View
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <View style={styles.outerContainer}>
          {/* Removed ImageBackground from layout, now handled per page */}
          <Stack
            screenOptions={{
              headerShown: false, // Hide default header, we use custom
              contentStyle: { backgroundColor: '#18181b' }, // Use a solid background color (dark)
            }}
          >
            <Stack.Screen
              name="index"
              options={{
                headerShown: true,
                header: () => <AppHeader />, // Use the custom header component
              }}
            />
            <Stack.Screen
              name="logo/[id]"
              options={{
                headerShown: true,
                header: () => <AppHeader />, // Use the custom header component
                animation: 'slide_from_right',
              }}
            />
            <Stack.Screen name="+not-found" />
          </Stack>
        </View>
      </ThemeProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: 'black', // Set the base background color to black
  },
});
