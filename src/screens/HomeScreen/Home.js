import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Flatlist, Image } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';

//Constant
import {icons, images, COLORS, SIZES, FONTS} from "../../constants";

//Components
import { HomeHeader } from './components';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor: COLORS.lightGray4,
    paddingTop: Constants.statusBarHeight, //To show best on Android
  }
})
export default Home;