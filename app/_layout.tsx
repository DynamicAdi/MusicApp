import { COLORS, SIZES, THEME } from '@/constants';
import { AntDesign } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { TouchableOpacity, useColorScheme } from 'react-native';

export {
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // Inter Fonts
    'Inter-reg': require("@/assets/fonts/Inter-Regular.ttf"),
    'Inter-semi': require("@/assets/fonts/Inter-SemiBold.ttf"),
    'Inter-bold': require("@/assets/fonts/Inter-Bold.ttf"),

    // Poppins
    'pop-reg': require("@/assets/fonts/Poppins-Regular.ttf"),
    'pop-med': require("@/assets/fonts/Poppins-Medium.ttf"),
    'pop-semi': require("@/assets/fonts/Poppins-SemiBold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName='index'>
        <Stack.Screen name="index" options={{ 
          headerShadowVisible: false,
          headerShown: true,
          headerTitle: "Hey, There!",
          headerRight: () => (
            <TouchableOpacity onPress={()=> {
             router.navigate('../search/[id]');
            }}>
              <AntDesign name="search1" size={25} color={THEME[useColorScheme() ?? 'light'].tint} />
            </TouchableOpacity>
          ),
          headerTitleStyle: {color: THEME[useColorScheme() ?? 'light'].tint, fontSize: SIZES.xxxl, fontFamily: 'Inter-bold'},
         }} />
      </Stack>
    </ThemeProvider>
  );
}
