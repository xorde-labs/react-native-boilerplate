import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type TViewElementStyle = ViewStyle;
export type TTextElementStyle = ViewStyle | TextStyle;
export type TImageElementStyle = ViewStyle | TextStyle | ImageStyle;
export type TElementStyle = ViewStyle | TextStyle | ImageStyle;

export type TNamedStyles = {
	[name: string]: ViewStyle | TextStyle | ImageStyle;
};
