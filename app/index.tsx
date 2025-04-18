import { useRouter } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { PromptInput } from '@/components/create-logo/PromptInput';
import { LogoStylesSelector } from '@/components/create-logo/LogoStylesSelector';
import { CreateButton } from '@/components/create-logo/CreateButton';
import { StatusChip, StatusType } from '@/components/create-logo/StatusChip';
import { s } from '@/utils/responsive';
import { PageBackground } from '@/components/layout/PageBackground';

const MOCK_LOGO_URL = 'https://placehold.co/80x80/png';

export default function CreateLogoPage() {
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('none');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<StatusType>('pending');
  const [logoId, setLogoId] = useState<string | null>(null);
  const router = useRouter();

  const handleCreate = () => {
    setLoading(true);
    setStatus('processing');
    // Simulate API call
    setTimeout(() => {
      // Randomly simulate error or success for demo
      if (Math.random() < 0.2) {
        setStatus('error');
        setLoading(false);
      } else {
        setStatus('done');
        setLogoId('123'); // mock id
        setLoading(false);
      }
    }, 5000); // 60 seconds
  };

  const handleStatusPress = () => {
    if (status === 'done' && logoId) {
      router.push(`/logo/${logoId}`);
    } else if (status === 'error') {
      setStatus('pending');
    }
  };

  return (
    <PageBackground>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={80}
      >
        <View style={styles.container}>
          <StatusChip
            status={status}
            onPress={handleStatusPress}
            logoUrl={status === 'done' ? MOCK_LOGO_URL : undefined}
            eta="2 minutes"
          />
          <PromptInput value={prompt} onChangeText={setPrompt} />
          <LogoStylesSelector selected={selectedStyle} onSelect={setSelectedStyle} />
          <CreateButton onPress={handleCreate} loading={loading} />
        </View>
      </KeyboardAvoidingView>
    </PageBackground>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    flex: 1,
    paddingVertical: s(24),
  },
});
