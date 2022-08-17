import { StatusBarStyle } from 'react-native';
import { IThemeColors } from './colors';
import { IThemeStyles } from './styles';

export interface ITheme {
	Colors: IThemeColors;
	StatusBar: StatusBarStyle;
	Styles: IThemeStyles;
}

// sectionTitle: {
// 	fontSize: 24;
// 	fontWeight: '600';
// };
// sectionDescription: {
// 	marginTop: 8;
// 	fontSize: 18;
// 	fontWeight: '400';
// };
// highlight: {
// 	fontWeight: '700';
// };
