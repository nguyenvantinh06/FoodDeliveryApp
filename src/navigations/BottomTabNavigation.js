import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import Svg, {Path} from "react-native-svg";

//Screen
import {Home, Search, Favourite, User} from "../screens";

//Constant
import {COLORS, icons, SIZES} from "../constants";

const BottomTab = createBottomTabNavigator();

// Tab Bar Options for BottomTab Navigator
const tabOptions = {
    showLabel: false,
    style: { 
        height: "20%",
        borderTopWidth: 0,
        backgroundColor: "transparent",
        elevation: 0,
    }
}

// Bottom Tab Icon
const BottomTabIcon = (props) => {
    const {source, tintColor} = props
    return (
        <Image
            source={source}
            resizeMode="contain"
            style={{ 
                tintColor:tintColor,
                width: 25,
                height: 25,
                marginBottom: SIZES.base,
            }}  
        />
    )
}

//Components
const TabBarCustomButton = (props) => {
    const { accessibilityState, children, onPress } = props
    let isSelected = accessibilityState.selected

    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                    <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={COLORS.white}
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
                </View>

                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: COLORS.white
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 60,
                    backgroundColor: COLORS.white
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}

//Custom Bar For Iphone 10, 11 and 12
// const CustomTabBar = (props) => {
//     if (isIphoneX()) {
//         return (
//             <View>
//                 <View
//                     style={{
//                         position: 'absolute',
//                         bottom: 0,
//                         left: 0,
//                         right: 0,
//                         height: 30,
//                         backgroundColor: COLORS.white
//                     }}
//                 ></View>
//                 <BottomTabBar
//                     {...props.props}
//                 />
//             </View>
//         )
//     } else {
//         return (
//             <BottomTabBar
//                 {...props.props}
//             />
//         )
//     }

// }

const BottomTabNavigation = () => {
    return (
        <BottomTab.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    const tintColor = focused ? COLORS.primary : COLORS.secondary;

                    switch (route.name) {
                        case "HomeTab":
                            return (
                                <BottomTabIcon  
                                    source={icons.cutlery}
                                    tintColor={tintColor}
                                />
                            )
                        case "Search":
                            return (
                                <BottomTabIcon  
                                    source={icons.search}
                                    tintColor={tintColor}
                                />
                            )
                        case "Favourite":
                            return (
                                <BottomTabIcon  
                                    source={icons.like}
                                    tintColor={tintColor}
                                />
                            )
                        case "User":
                            return (
                                <BottomTabIcon  
                                    source={icons.user}
                                    tintColor={tintColor}
                                />
                            )
                    }
                },
                headerShown: false,
                tabBarButton: (props) => (
                    <TabBarCustomButton 
                        {...props}
                    />
                )
            })}
            // tabBar={(props) => {
            //     <CustomTabBar
            //         props={props}
            //     />
            // }}
        >
            <BottomTab.Screen 
                name="HomeTab"
                component={Home}
            />

            <BottomTab.Screen 
                name="Search"
                component={Search}
            />

            <BottomTab.Screen 
                name="Favourite"
                component={Favourite}
            />

            <BottomTab.Screen 
                name="User"
                component={User}
            />

        </BottomTab.Navigator>
    )
}


export default BottomTabNavigation;