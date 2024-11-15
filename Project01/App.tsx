import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  Button,
} from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'light';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hello World !!
      </Text>
      <Button title="click"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },

  whiteText: {
    color: '#ffffff',
  },

  darkText: {
    color: '#00000',
  },
});

export default App;
