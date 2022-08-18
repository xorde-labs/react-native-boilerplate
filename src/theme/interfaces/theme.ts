import { StatusBarStyle } from 'react-native';
import { IThemeColors } from './colors';
import { IThemeStyles } from './styles';

export interface ITheme {
	Colors: IThemeColors;
	StatusBar: StatusBarStyle;
	Styles: IThemeStyles;
}
