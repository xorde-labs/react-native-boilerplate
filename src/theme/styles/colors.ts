import { ThemeColors } from '../elements/colors';
import { TextStyle, ViewStyle } from 'react-native';

export interface IColorStyle {
	default: ViewStyle | TextStyle;
}

export const ColorStyles: IColorStyle = {
	default: {
		backgroundColor: ThemeColors.background,
		color: ThemeColors.text,
	},
};
