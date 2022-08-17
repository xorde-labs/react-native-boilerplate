export interface IThemeColorsStates {
	normal: string;
	hover: string;
	disabled: string;
	pressed: string;
}

export interface IThemeColors {
	primary: string;
	secondary: string;
	tertiary: string;
	background: string;
	button: string;
	text: string;
	success: string;
	error: string;
	warning: string;
	info: string;
	disabled: string;
	transparent: string;
	states: IThemeColorsStates;
}

export interface IThemeColorsShades {
	dark: string;
	light: string;
	darker: string;
	lighter: string;
}

export interface IThemeShades {
	primary: IThemeColorsShades;
	secondary: IThemeColorsShades;
	tertiary: IThemeColorsShades;
	background: IThemeColorsShades;
}
