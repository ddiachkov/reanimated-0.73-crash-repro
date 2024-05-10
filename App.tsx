import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Rive from 'rive-react-native';
import Animated from 'react-native-reanimated';

function App() {
  return (
    <View style={styles.container}>
      <Animated.View>
        <Text style={styles.label}>Press on the menu to crash</Text>
      </Animated.View>

      <Rive resourceName="example" style={styles.menu} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: 50,
    rowGap: 30,
  },

  label: {
    color: 'red',
    fontSize: 80,
  },

  menu: {
    width: '100%',
    height: '100%',
  },
});

export default App;
