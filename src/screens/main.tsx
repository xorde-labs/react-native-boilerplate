/**
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View } from 'react-native';

import { DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import { Theme } from '../theme';
import { Section } from '../components/views/section';

const Main = () => {
	const theme = Theme(useColorScheme() === 'dark');

	return (
		<SafeAreaView style={theme.Screen.container}>
			<StatusBar barStyle={theme.StatusBar} />
			<ScrollView contentInsetAdjustmentBehavior="automatic" style={theme.Base.Colors}>
				<Header />
				<View
					style={{
						backgroundColor: theme.Screen.container.backgroundColor,
					}}
				>
					<Section title="Step One">
						Edit <Text style={}>App.tsx</Text> to change this screen and then come back to see your edits.
					</Section>
					<Section title="See Your Changes">
						<ReloadInstructions />
					</Section>
					<Section title="Debug">
						<DebugInstructions />
					</Section>
					<Section title="Learn More">Read the docs to discover what to do next:</Section>
					<LearnMoreLinks />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Main;
