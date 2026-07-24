import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SystemBars } from "react-native-edge-to-edge";
import useTheme from "../../store/useTheme";
import { useEffect } from "react";
import {getItem} from '../../utils/storage';
import {
  useFonts,
  Syne_400Regular,
  Syne_500Medium,
  Syne_600SemiBold,
  Syne_700Bold,
  Syne_800ExtraBold,
} from "@expo-google-fonts/syne";

import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL);

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Syne_400Regular,
    Syne_500Medium,
    Syne_600SemiBold,
    Syne_700Bold,
    Syne_800ExtraBold,
  });
  const { colors, setTheme } = useTheme();

  useEffect(()=>{
    const LoadTheme = async () => {
      const storedTheme = await getItem('themeMode');
      if(storedTheme)
      {
        setTheme(storedTheme);
      }
      else{
        return null; // No stored theme found, do nothing
      }
    }
    LoadTheme();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ConvexProvider client={convex}>
      <SystemBars style={colors.statusBarStyle} />
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.background,
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: colors.accentPrimary,
          tabBarInactiveTintColor: colors.textMuted,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="category"
          options={{
            title:"Categories",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "grid" : "grid-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="favorite"
          options={{
            title: "Favorite",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "heart" : "heart-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </ConvexProvider>
  );
}
