import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SystemBars } from "react-native-edge-to-edge";
import useTheme from "../../store/useTheme";
import {
  useFonts,
  Syne_400Regular,
  Syne_500Medium,
  Syne_600SemiBold,
  Syne_700Bold,
  Syne_800ExtraBold,
} from "@expo-google-fonts/syne";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Syne_400Regular,
    Syne_500Medium,
    Syne_600SemiBold,
    Syne_700Bold,
    Syne_800ExtraBold,
  });
  const { colors } = useTheme();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
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
            tabLabel: "Home",
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
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "timer" : "timer-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
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
    </>
  );
}
