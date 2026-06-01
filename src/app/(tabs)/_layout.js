import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SystemBars } from "react-native-edge-to-edge";
import useTheme from '../../store/useTheme'


export default function Layout() {
  const {colors} = useTheme();
    return (
      <>
        <SystemBars style={colors.statusBarStyle} />
        <Tabs
          screenOptions={{
            tabBarStyle: {
              backgroundColor: colors.background,
              setOffset: 0,
              borderTopWidth: 0,
            },
            tabBarActiveTintColor: colors.accentPrimary,
            tabBarInactiveTintColor: colors.textMuted,
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Ionicons name="home-outline" size={24} color="grey" />
              ),
            }}
          />
          <Tabs.Screen
            name='category'
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Ionicons name="grid-outline" size={24} color="grey" />
              ),
            }}
            /> 
          <Tabs.Screen
            name="favorite"
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Ionicons name="timer-outline" size={24} color="grey" />
              ),
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Ionicons name="person-outline" size={24} color="grey" />
              ),
            }}
          />
        </Tabs>
      </>
    );
  }
