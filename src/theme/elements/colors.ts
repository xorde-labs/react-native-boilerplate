import { StandardPalette } from '../enums/palette';
import { Appearance } from 'react-native';
import { IThemeColors } from '../interfaces/colors';

const isDark = Appearance.getColorScheme() === 'dark';

const DefaultColors: IThemeColors = {
	background: StandardPalette.white,
	button: {
		normal: StandardPalette.blueviolet,
		hover: StandardPalette.cadetblue,
		disabled: StandardPalette.gray,
		pressed: StandardPalette.blue,
	},
	disabled: StandardPalette.darkslategray,
	error: StandardPalette.red,
	info: StandardPalette.blue,
	primary: StandardPalette.cornflowerblue,
	secondary: StandardPalette.lightblue,
	success: StandardPalette.forestgreen,
	tertiary: StandardPalette.aliceblue,
	text: StandardPalette.black,
	transparent: StandardPalette.transparent,
	warning: StandardPalette.indianred,
};

// Override default colors with light theme colors
const LightColors: IThemeColors = {
	...DefaultColors,
	primary: StandardPalette.blue,
	secondary: StandardPalette.red,
	tertiary: StandardPalette.green,
};

// Override default colors with dark theme colors
const DarkColors: IThemeColors = {
	...DefaultColors,
	background: StandardPalette.black,
	primary: StandardPalette.green,
	secondary: StandardPalette.yellow,
	tertiary: StandardPalette.red,
};

export const ThemeColors: IThemeColors = isDark ? DarkColors : LightColors;
