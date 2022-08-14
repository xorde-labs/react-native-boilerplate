import { TextStyle, ViewStyle } from 'react-native';
import { Base } from './base';

export interface IScreenTheme {
	container: ViewStyle | TextStyle;
	header: ViewStyle | TextStyle;
	footer: ViewStyle | TextStyle;
}

export const ScreenTheme = (isDark = false): IScreenTheme => ({
	container: {
		...Base(isDark),
		marginTop: 32,
		paddingHorizontal: 24,
	},
	header: {},
	footer: {},
});
