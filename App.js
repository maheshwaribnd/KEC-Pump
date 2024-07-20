import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PaperProvider} from 'react-native-paper';
import Index from './src/Index';

const App = () => {
  return (
    <PaperProvider>
      <Index />
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
