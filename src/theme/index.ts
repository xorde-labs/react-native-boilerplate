import { StatusBarStyle, StyleSheet } from 'react-native';
import { IScreenTheme, ScreenTheme } from './screen';
import { BaseColors, IBaseThemeVariant } from './base';
import { TTextElementStyle } from './types/theme';

export * from './elements/colors';
export * from './elements/spacing';
export * from './elements/typography';

export interface IThemes {
	Colors: TTextElementStyle;
	Fonts: TTextElementStyle;
	Screen: IScreenTheme;
	StatusBar: StatusBarStyle;
}

export const StatusBar = (isDark = false): StatusBarStyle => (isDark ? 'dark-content' : 'light-content');

export const Theme = (isDark = false): IThemes => ({
	Colors: StyleSheet.create(BaseColors(isDark)),
	Screen: StyleSheet.create(ScreenTheme(isDark)),
	StatusBar: isDark ? 'dark-content' : 'light-content',
});
