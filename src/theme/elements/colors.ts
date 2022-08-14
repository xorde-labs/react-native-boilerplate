import { StandardPalette } from '../enums/palette';

export interface AppColors {
	primary: string;
	alternative: string;
	primaryDarker: string;
	background: string;
}

export const LightColors: AppColors = {
	background: StandardPalette.white,
	primaryDarker: StandardPalette.darkolivegreen,
	primary: StandardPalette.olive,
	alternative: StandardPalette.yellowgreen,
};

export const DarkColors: AppColors = {
	background: StandardPalette.black,
	primaryDarker: StandardPalette.violet,
	primary: StandardPalette.darkviolet,
	alternative: StandardPalette.blanchedalmond,
};

export const Colors = (isDark = false): AppColors => (isDark ? DarkColors : LightColors);
