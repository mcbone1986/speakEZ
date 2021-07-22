import React, { useState, useEffect } from 'react';
import { StyleSheet, Switch, Text, View, SafeAreaView, Image, Dimensions, Button, Alert, TouchableHighlight, TextInput } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import AppText from './app/components/AppText';

import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from './app/config/colors';

import AppButton from './app/components/AppButton';

import Card from './app/components/Card';

import DrinkDetailsScreen from './app/screens/DrinkDetailsScreen';

import MessagesScreen from './app/screens/MessagesScreen';

import Screen from './app/components/Screen';

import Icon from './app/components/Icon';

import DrinkItem from './app/components/DrinkItem';
import AccountsScreen from './app/screens/AccountsScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';

// const catergories = [
//   {label: "Beer", value: 1},
//   {label: "Cocktails", value: 2},
//   {label: "Sodas", value: 3}
// ]

export default function App() {

  // const [category, setCategory] = useState('');

  return (
    // <AccountsScreen />
    // <DrinkDetailsScreen />
    // <WelcomeScreen />
    // <LoginScreen />
    // <ListingScreen />
    <MessagesScreen />
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',


  // },
});
