
// TechPulse — Theme Colors

export const lightColors = {
  // Surfaces
  background: '#F5F6FA',           // App background
  surfaceBg: '#FFFFFF',         // Cards, sheets, elevated surfaces
  surfaceSecondary: '#ECEEF5',  // Search fields, icon button backgrounds, inactive chips

  // Text
  textPrimary: '#0A1628',       // Headings, primary body
  textSecondary: '#4A5578',     // Subtitles, secondary body
  textMuted: '#8B94B2',         // Captions, meta info, placeholders

  // Accents
  accentPrimary: '#0057FF',     // Primary brand — buttons, active states, links
  accentSecondary: '#00B8D9',   // Secondary accent — highlights, gradients

  // Tags / Pills
  tagFill: '#EBF0FF',           // Category tag background
  tagText: '#0057FF',           // Category tag text

  // Borders
  border: 'rgba(10, 22, 60, 0.08)',
  borderStrong: 'rgba(10, 22, 60, 0.16)',

  // Status
  liveBadge: '#FF3B5C',         // LIVE indicator, destructive actions (logout)
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',

  // Overlays (used over images)
  overlayLight: 'rgba(255, 255, 255, 0.22)',
  overlayDark: 'rgba(0, 0, 0, 0.7)',

  // Skeleton / placeholder
  skeleton: '#E5E8F0',

  // Status bar tint — pass to <StatusBar style={...} /> from expo-status-bar
  statusBarStyle: 'dark',
};

export const darkColors = {
  // Surfaces
  background: '#0B0F1A',
  surfaceBg: '#111827',
  surfaceSecondary: '#1C2337',

  // Text
  textPrimary: '#E8EDFB',
  textSecondary: '#8B97C0',
  textMuted: '#4E5A7A',

  // Accents
  accentPrimary: '#4D8AFF',
  accentSecondary: '#00D9FF',

  // Tags / Pills
  tagFill: '#1A2540',
  tagText: '#4D8AFF',

  // Borders
  border: 'rgba(255, 255, 255, 0.07)',
  borderStrong: 'rgba(255, 255, 255, 0.14)',

  // Status
  liveBadge: '#FF3B5C',
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',

  // Overlays
  overlayLight: 'rgba(255, 255, 255, 0.18)',
  overlayDark: 'rgba(0, 0, 0, 0.75)',

  // Skeleton
  skeleton: '#1C2337',

  // Status bar tint
  statusBarStyle: 'light',
};


export const themes = {
  light: lightColors,
  dark: darkColors,
};

export default themes;
