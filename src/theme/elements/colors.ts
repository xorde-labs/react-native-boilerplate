import { StandardPalette } from '../enums/palette';
import { Appearance } from 'react-native';
import { IThemeColors } from '../interfaces/colors';

const isDark = Appearance.getColorScheme() === 'dark';

const DefaultColors: IThemeColors = {
	background: '',
	button: '',
	disabled: '',
	error: '',
	info: '',
	primary: '',
	secondary: '',
	states: {
		disabled: '',
		hover: '',
		normal: '',
		pressed: '',
	},
	success: '',
	tertiary: '',
	text: '',
	transparent: StandardPalette.transparent,
	warning: '',
};

const LightColors: IThemeColors = {
	...DefaultColors,
	primary: StandardPalette.blue,
	secondary: StandardPalette.red,
	tertiary: StandardPalette.green,
};

const DarkColors: IThemeColors = {
	...DefaultColors,
	primary: StandardPalette.blue,
	secondary: StandardPalette.red,
	tertiary: StandardPalette.green,
};

export const Colors: IThemeColors = isDark ? DarkColors : LightColors;
