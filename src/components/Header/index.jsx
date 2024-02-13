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
						uri: "https://media.licdn.com/dms/image/D4D03AQFASt0CtubB_g/profile-displayphoto-shrink_800_800/0/1691850636025?e=1703116800&v=beta&t=LIJ50XYaRDExgmSsgGXExaN3u_lKa8OClPDP4KWbgAs",
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
