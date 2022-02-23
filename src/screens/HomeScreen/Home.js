import {SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';

//Constant
import {COLORS} from "../../constants";

//Components
import { HomeHeader, MainCategories } from './components';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <MainCategories />
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