import { TextStyle, ViewStyle } from 'react-native';

export interface ITheme {
	section: (ViewStyle | TextStyle) & {
		container: ViewStyle | TextStyle;
		title: ViewStyle | TextStyle;
		description: ViewStyle | TextStyle;
	};
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
