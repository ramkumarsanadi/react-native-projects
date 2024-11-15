import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={style.container}>
      <Text style={isDarkMode ? style.whiteText : style.blackText}>
        Hello App Pro!!
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  whiteText: {
    color: '#ffffff',
  },

  blackText: {
    color: '#000000',
  },
});

export default AppPro;
