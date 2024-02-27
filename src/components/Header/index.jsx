import React, { useEffect, useState } from "react";
import { Text, View, Image, Keyboard } from "react-native";
import styles from "./style";

export default function Header() {
	const [keyboardVisible, setKeyboardVisible] = useState(false);

	useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener(
			"keyboardDidShow",
			() => {
				setKeyboardVisible(true);
			}
		);
		const keyboardDidHideListener = Keyboard.addListener(
			"keyboardDidHide",
			() => {
				setKeyboardVisible(false);
			}
		);

		return () => {
			keyboardDidShowListener.remove();
			keyboardDidHideListener.remove();
		};
	}, []);

	const imageSize = keyboardVisible ? 50 : 90;
	const textSize = keyboardVisible ? 15 : 21;

	return (
		<View style={styles.header}>
			<View>
				<Image
					style={[styles.image, { width: imageSize, height: imageSize }]}
					source={{
						uri: "https://i.pinimg.com/736x/3e/aa/24/3eaa245d923949b6f662b8ba07b7a3b2.jpg",
					}}
				/>
			</View>
			<View>
				<Text style={[styles.name, { fontSize: textSize }]}>Olá, Rubens!</Text>
				<Text style={styles.textWelcome}>Como podemos te ajudar?</Text>
			</View>
		</View>
	);
}
