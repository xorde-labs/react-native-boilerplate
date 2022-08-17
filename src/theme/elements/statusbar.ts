import { Appearance } from 'react-native';

const isDark = Appearance.getColorScheme() === 'dark';

export const StatusBarTheme = isDark ? 'dark-content' : 'light-content';
