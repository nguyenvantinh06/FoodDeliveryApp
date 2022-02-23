import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Constants from "expo-constants";

//Screen
import {Home, OrderDelivery, Restaurant} from "./src/screens";

//Bottom Tab Navigation
import BottomTabNavigation from "./src/navigations/BottomTabNavigation";

const Stack = createStackNavigator();

export default function App() {
    return (
		<NavigationContainer>
			{/* <StatusBar style="light" /> */}
			<Stack.Navigator
				screenOption={{
					headerShown: false
				}}
				initialRouteName={"Home"}
			>
				<Stack.Screen name="Home" component={BottomTabNavigation} options={{headerShown: false}} />
				<Stack.Screen name="OrderDelivery" component={OrderDelivery} />
				<Stack.Screen name="Restaurant" component={Restaurant} />
			</Stack.Navigator>
		</NavigationContainer>
    );
}

// const styles = StyleSheet.create({
//     container: {
// 		paddingTop: Constants.statusBarHeight, //để hiển thị tốt trên Android
//     },
// });
