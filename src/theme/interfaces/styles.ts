import { TextStyle, ViewStyle } from 'react-native';

export interface IThemeStyles {
	View: ViewStyle | TextStyle;
	SafeAreaView: ViewStyle | TextStyle;
	ScrollView: ViewStyle | TextStyle;
	Section: ViewStyle | TextStyle;
}

export interface IColorStyles {
	Default: ViewStyle | TextStyle;
}
