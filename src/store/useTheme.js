import {create} from 'zustand';
import themes from '../utils/colors';
import sfConstraints from '../utils/spacing'



const useTheme = create((set)=> {
    return { 
        themeMode: 'light',
        colors: themes.light,
        fSize: sfConstraints.fontSize,
        spacing: sfConstraints.spacing,
        toggleTheme: () => set((currentMode)=> {
            if(currentMode.themeMode === 'dark') {
                return { themeMode: 'light', colors: themes.light };
            } else {
                return { themeMode: 'dark', colors: themes.dark };
            }
        })
    }
});

export default useTheme;
