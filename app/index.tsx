import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { PromptInput } from '@/components/create-logo/PromptInput';
import { LogoStylesSelector } from '@/components/create-logo/LogoStylesSelector';
import { CreateButton } from '@/components/create-logo/CreateButton';
import { StatusChip, StatusType } from '@/components/create-logo/StatusChip';
import { s } from '@/utils/responsive';
import { PageBackground } from '@/components/layout/PageBackground';
import { GENERATE_LOGO_URL } from '@/utils/api';

export default function CreateLogoPage() {
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('none');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<StatusType>('pending');
  const [logoId, setLogoId] = useState<string | null>(null);
  const [logoData, setLogoData] = useState<any>(null);
  const router = useRouter();

  const handleCreate = async () => {
    setLoading(true);
    setStatus('processing');
    setLogoId(null);
    setLogoData(null);
    try {
      // Only call the API, backend handles delay
      const res = await fetch(GENERATE_LOGO_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, style: selectedStyle }),
      });
      if (!res.ok) throw new Error('Failed to generate logo');
      const data = await res.json();
      setStatus('done');
      setLogoId(data.id);
      setLogoData(data);
    } catch (e) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusPress = () => {
    if (status === 'done' && logoId && logoData) {
      router.push({
        pathname: '/logo/[id]',
        params: { id: logoId, ...logoData },
      });
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
            logoUrl={status === 'done' && logoData ? logoData.imageUrl : undefined}
            eta="30-60 seconds"
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
