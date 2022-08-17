import { TextStyle, ViewStyle } from 'react-native';
import { ThemeColors } from '../elements/colors';
import { Typography } from '../elements/typography';

export interface IBaseThemeVariant {
	Colors: ViewStyle | TextStyle;
	Fonts?: TextStyle;
}

export const BaseColors: ViewStyle | TextStyle = {
	color: ThemeColors.primary,
	backgroundColor: ThemeColors.background,
};

export const BaseFonts: TextStyle = {
	fontStyle: 'normal',
	fontFamily: Typography.primary,
	fontWeight: 'normal',
};

export const Styles = {
	Colors: BaseColors,
	Fonts: BaseFonts,
};
