import { TextStyle, ViewStyle } from 'react-native';
import { Colors } from './elements/colors';
import { Typography } from './enums/typography';

export interface IBaseThemeVariant {
	Colors: ViewStyle | TextStyle;
	Fonts?: TextStyle;
}

export const BaseColors = (isDark = false): ViewStyle | TextStyle => ({
	color: Colors(isDark).primary,
	backgroundColor: Colors(isDark).background,
});

export const BaseFonts: TextStyle = {
	fontStyle: 'normal',
	fontFamily: Typography.primary,
	fontWeight: 'normal',
};

export const Base = (isDark = false): IBaseThemeVariant => ({
	Colors: BaseColors(isDark),
	Fonts: BaseFonts,
});
