import { Platform } from 'react-native';
import { IThemeTypography } from '../interfaces/typography';

const isAndroid = Platform.OS === 'android';

const androidTypography: IThemeTypography = {
	primary: 'normal',
	secondary: 'sans-serif',
	code: 'monospace',
	title: 'normal',
};

const iosTypography: IThemeTypography = {
	primary: 'Helvetica',
	secondary: 'Arial',
	code: 'Courier',
	title: 'Helvetica',
};

export const Typography: IThemeTypography = isAndroid ? androidTypography : iosTypography;
