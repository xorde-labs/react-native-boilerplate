/**
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import { Theme } from '../theme';
import { Section } from '../components/views/section';

const Main = () => {
	return (
		<SafeAreaView style={Theme.Styles.SafeAreaView}>
			<StatusBar barStyle={Theme.StatusBar} />
			<ScrollView contentInsetAdjustmentBehavior="automatic" style={Theme.Styles.ScrollView}>
				<Header />
				<View style={Theme.Styles.View}>
					<Section title="Step One" style={Theme.Styles.Section}>
						Edit <Text style={S.highlight}>App.tsx</Text> to change this screen and then come back to see your edits.
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

const S = StyleSheet.create({
	highlight: {
		color: 'red',
	},
});

export default Main;
