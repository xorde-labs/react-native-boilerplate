import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { Spacing, Theme } from '../../theme';

export const Section: React.FC<
	PropsWithChildren<{
		title: string;
		style?: ViewStyle | TextStyle;
	}>
> = ({ children, title }) => {
	return (
		<View style={S.sectionContainer}>
			<Text style={S.sectionTitle}>{title}</Text>
			<Text style={S.sectionDescription}>{children}</Text>
		</View>
	);
};

const S = StyleSheet.create({
	sectionContainer: {
		marginTop: Spacing.large,
		paddingHorizontal: Spacing.mediumPlus,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Theme.Colors.text,
	},
	sectionDescription: {
		marginTop: Spacing.smaller,
		fontSize: 18,
		fontWeight: '400',
		color: Theme.Colors.text,
	},
	highlight: {
		fontWeight: '700',
	},
});
