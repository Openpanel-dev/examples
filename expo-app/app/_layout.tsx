import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, usePathname, useSegments } from 'expo-router';

import { useColorScheme } from '@/components/useColorScheme';
import { useEffect } from 'react';
import { op } from '@/libs/op';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};


export default function RootLayout() {
    return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  const pathname = usePathname()
  // Segments is optional but can be nice to have if you
  // want to group routes together
  // pathname = /posts/123
  // segements = ['posts', '[id]']
  const segments = useSegments()
 
  useEffect(() => {
    // Simple
    // op.screenView(pathname)
 
    // With extra data
    op.screenView(pathname, {
      // segments is optional but nice to have
      segments: segments.join('/'),
    })
  }, [pathname,segments])


  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  );
}
