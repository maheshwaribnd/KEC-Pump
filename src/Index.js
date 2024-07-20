import {LogBox, StatusBar, StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import StackNavigation from './Navigation/StackNavigation';

const Index = () => {
  StatusBar.setHidden(true);

  console.disableYellowBox = true;

  useEffect(() => {
    LogBox.ignoreAllLogs(true);
  }, []);

  LogBox.ignoreLogs(['Warning: ...']);

  return <StackNavigation />;
};

export default Index;

const styles = StyleSheet.create({});
