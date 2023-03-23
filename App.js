import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/restoredPhoto.jpg')} />
      <Text style={styles.paragraph}>
        Shubham Kumar Anand
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#3a4c40',
  },
  paragraph: {
    margin: 24,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  },
  logo: {
    height: 128,
    width: 128,
    borderRadius: 100,
    backgroundColor: '#5f967c',
    marginLeft:'auto',
    marginRight: 'auto'
  }
});
