import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItems = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.error("Error setting item in AsyncStorage:", error);
    }
};

export const getItems = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (error) {
        console.error("Error getting item from AsyncStorage:", error);
        return null;
    }
};
