/**
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';

import { DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import { Theme } from '../theme';
import { Section } from '../components/views/section';

const Main = () => {
	return (
		<SafeAreaView style={Theme.Styles.screen.container}>
			<StatusBar barStyle={Theme.StatusBar} />
			<ScrollView contentInsetAdjustmentBehavior="automatic" style={Theme.Styles.colors.default}>
				<Header />
				<View
					style={{
						backgroundColor: Theme.Styles.screen.container.backgroundColor,
					}}
				>
					<Section title="Step One">
						Edit <Text style={{ color: 'red' }}>App.tsx</Text> to change this screen and then come back to see your
						edits.
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
