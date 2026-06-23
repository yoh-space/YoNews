import {create} from 'zustand';
import themes from '../utils/colors';
import sfConstraints from '../utils/spacing'
import {setItem} from '../utils/storage';



const useTheme = create((set)=> {
    return { 
        themeMode: 'light',
        colors: themes.light,
        fSize: sfConstraints.fontSize,
        spacing: sfConstraints.spacing,
        setTheme: (mode, color) => {
            set({themeMode: mode, colors: color});        
        },
        toggleTheme: async () => set((currentMode)=> {
            const newMode = currentMode.themeMode === 'light' ? 'dark' : 'light';
            setItem('themeMode', newMode);
            return {themeMode: newMode, colors: themes[newMode]};
        })
    }
});

export default useTheme;
