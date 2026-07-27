import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import {
  useFonts,
  Syne_400Regular,
  Syne_500Medium,
  Syne_600SemiBold,
  Syne_700Bold,
  Syne_800ExtraBold,
} from "@expo-google-fonts/syne";
import { Stack } from "expo-router";
import { getItem } from "../utils/storage";
import useTheme from "../store/useTheme";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL);

const Layout = () => {
  const  {setTheme} = useTheme();
  const [fontsLoaded] = useFonts({
    Syne_400Regular,
    Syne_500Medium,
    Syne_600SemiBold,
    Syne_700Bold,
    Syne_800ExtraBold,
  });
  useEffect(() => {
    const LoadTheme = async () => {
      const storedTheme = await getItem("themeMode");
      if (storedTheme) {
        setTheme(storedTheme);
      } else {
        return null; // No stored theme found, do nothing
      }
    };
    LoadTheme();
  }, []);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <ConvexProvider client={convex}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="article/[id]" />
      </Stack>
    </ConvexProvider>
  );
};

export default Layout;
