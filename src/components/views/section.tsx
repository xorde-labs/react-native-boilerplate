import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { ThemeColors, Spacing } from '../../theme';

export const Section: React.FC<
	PropsWithChildren<{
		title: string;
	}>
> = ({ children, title }) => {
	const isDarkMode = useColorScheme() === 'dark';
	return (
		<View style={styles.sectionContainer}>
			<Text
				style={[
					styles.sectionTitle,
					{
						color: ThemeColors(isDarkMode).primary,
					},
				]}
			>
				{title}
			</Text>
			<Text
				style={[
					styles.sectionDescription,
					{
						color: ThemeColors(isDarkMode).primary,
					},
				]}
			>
				{children}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: Spacing.large,
		paddingHorizontal: Spacing.mediumPlus,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
	},
	sectionDescription: {
		marginTop: Spacing.smaller,
		fontSize: 18,
		fontWeight: '400',
	},
	highlight: {
		fontWeight: '700',
	},
});
