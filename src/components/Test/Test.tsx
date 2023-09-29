import React from 'react';
import { Text, View } from 'react-native';
export interface TestProps {}

const Test : React.FC<TestProps> = () => {
	return (
		<View>
			<Text>Hello world</Text>
		</View>

	)
};

export default Test;
