import { useState } from "react";
import useTheme from "../store/useTheme";
import {Alert} from 'react-native'
import {router } from 'expo-router'

export const preferences = () => {
  const { themeMode, toggleTheme } = useTheme();
  const isDark = themeMode === "dark";
  const [isEnable, setIsEnable] = useState(false);
  return [
    {
      iconName: isEnable ? "notifications-outline" : "notifications-off-outline",
      label: "Notifications",
      action: () => {
        setIsEnable(!isEnable);
      },
      status: isEnable ? "Enabled" : "Disabled",
    },
    {
      iconName: isDark ? "moon-outline" : "sunny-outline",
      label: "Dark Mode",
      action: () => {
        toggleTheme();
      },
      status: isDark ? "Enabled" : "Disabled",
    },
    {
      iconName: "bookmark-outline",
      label: "Reading list",
      action: () => { router.push('./favorite')},
    },
    {
      iconName: "shield-outline",
      label: "Privacy Policy",
      action: () => {Alert.alert('Privacy Policy')},
    },
    {
      iconName: "information-circle-outline",
      label: "About us",
      action: () => {Alert.alert('About us')},
    },
    {
      iconName: "log-out-outline",
      label: "Logout",
      action: () => {},
    },
  ];
};
