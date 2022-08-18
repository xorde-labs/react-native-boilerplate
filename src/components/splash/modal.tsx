import { AppState, Modal, TextStyle, ViewStyle } from 'react-native';
import React, { PropsWithoutRef } from 'react';
import Lottie from 'lottie-react-native';
import splashAnimation from '../../assets/animations/splash.json';

export const Splash: React.FC<
	PropsWithoutRef<{
		style?: ViewStyle | TextStyle;
	}>
> = () => {
	const [isModalVisible, setModalVisible] = React.useState(true);

	const handleAnimationFinish = () => {
		if (AppState.currentState.match(/active|background/)) {
			setModalVisible(false);
		}
	};

	return (
		<Modal visible={isModalVisible} animationType="fade">
			<Lottie source={splashAnimation} loop={false} autoPlay onAnimationFinish={handleAnimationFinish} />
		</Modal>
	);
};
