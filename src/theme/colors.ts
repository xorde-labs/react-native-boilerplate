import { palette } from './palette';

export interface AppColors {
	primary: string;
	alternative: string;
	primaryDarker: string;
	background: string;
}

export const LightColors: AppColors = {
	background: palette.white.color,
	primaryDarker: palette.darkolivegreen.color,
	primary: palette.olive.color,
	alternative: palette.yellowgreen.color,
};

export const DarkColors: AppColors = {
	background: palette.black.color,
	primaryDarker: palette.violet.color,
	primary: palette.darkviolet.color,
	alternative: palette.blanchedalmond.color,
};
