import { StatusBarTheme } from './elements/statusbar';
import { ThemeColors } from './elements/colors';
import { IThemeStyles } from './interfaces/styles';
import { ScreenStyle } from './styles/screen';
import { ITheme } from './interfaces/theme';
import { StyleSheet } from 'react-native';
import { ColorStyles } from './styles/colors';

export * from './elements/colors';
export * from './elements/spacing';
export * from './elements/typography';

const ThemeStyles: IThemeStyles = {
	screen: StyleSheet.create(ScreenStyle),
	colors: ColorStyles,
};

export const Theme: ITheme = {
	Colors: ThemeColors,
	StatusBar: StatusBarTheme,
	Styles: ThemeStyles,
};
