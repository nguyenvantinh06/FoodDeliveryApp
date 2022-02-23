import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, {useState} from 'react'

//Constants
import {FONTS, SIZES, COLORS, icons} from "../../../constants";

// Custom Components
// Icon Button Header Home
const IconButton = (props) => {
	const {source, style} = props;
	return (
		<TouchableOpacity 
			style={style} 
		>
			<Image 
				source={source}
				resizeMode="contain"
				style={{
					width: 30,
					height: 30,
				}}
			/>
		</TouchableOpacity>
	)
}

const HomeHeader = () => {
	
	// Dummy Data Location
    const initialCurrentLocation = {
        streetName: "268 Ly Thuong Kiet",
        gps: {
            latitude: 10.776861938425938,
            longitude: 106.66008052780519
        }
    }

	const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation);

	return (
    	<View style={styles.container}>
			<IconButton  source={icons.nearby} style={{width: 50, paddingLeft: SIZES.padding * 2, justifyContent: 'center'}} />
			<View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
				<View
					style={{
						width: '70%',
						height: '100%',
						backgroundColor: COLORS.lightGray3,
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: SIZES.radius
					}}
				>
					<Text style={{...FONTS.h3}}>{currentLocation.streetName}</Text>
				</View> 
			</View>
			<IconButton  source={icons.basket} style={{width: 50, paddingRight: SIZES.padding * 2, justifyContent: 'center'}} />
    	</View>
  	)
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        height: 50,
    }
})
export default HomeHeader;