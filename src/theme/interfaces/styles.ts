import { TextStyle, ViewStyle } from 'react-native';
import { IColorStyle } from '../styles/colors';

export interface IScreenStyle {
	container: ViewStyle | TextStyle;
	header: ViewStyle | TextStyle;
	footer: ViewStyle | TextStyle;
}

export interface IThemeStyles {
	screen: IScreenStyle;
	colors: IColorStyle;
}
