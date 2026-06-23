import {create} from 'zustand';
import themes from '../utils/colors';
import sfConstraints from '../utils/spacing';
import { setItem, getItem } from '../utils/storage';



const useTheme = create((set, get)=> {
    return { 
        themeMode: 'light',
        colors: themes.light,
        fSize: sfConstraints.fontSize,
        spacing: sfConstraints.spacing,
        setTheme: (storedTheme) => set({themeMode: storedTheme, colors: themes[storedTheme]}),
        toggleTheme: async () => {
            const currentTheme = get().themeMode;
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            await setItem('themeMode', newTheme);
            set({themeMode: newTheme, colors: themes[newTheme]}); 
        }
    }
});

export default useTheme;
