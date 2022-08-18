import { StatusBarTheme } from './elements/statusbar';
import { ThemeColors } from './elements/colors';
import { IThemeStyles } from './interfaces/styles';
import { ITheme } from './interfaces/theme';
import { StyleSafeAreaView, StyleScrollView, StyleSection, StyleView } from './styles/views';

export * from './elements/colors';
export * from './elements/spacing';
export * from './elements/typography';

const ThemeStyles: IThemeStyles = {
	SafeAreaView: StyleSafeAreaView,
	ScrollView: StyleScrollView,
	View: StyleView,
	Section: StyleSection,
};

export const Theme: ITheme = {
	Colors: ThemeColors,
	StatusBar: StatusBarTheme,
	Styles: ThemeStyles,
};
