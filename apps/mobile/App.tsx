import React from 'react';
import {Button, StyleSheet, Text, View, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {shared, useCounterStore} from '@monorepo/shared';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const {count, decrement, increment} = useCounterStore();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={[backgroundStyle, styles.page]}>
      <Text style={styles.title}>{shared}</Text>
      <Text style={styles.sectionTitle}>
        Count from shared code zustand: {count}
      </Text>
      <View style={styles.buttons}>
        <Button title="Decrement" onPress={decrement} />
        <Button title="Increment" onPress={increment} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    gap: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 32,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  buttons: {
    flexDirection: 'row',
    gap: 16,
  },
});

export default App;
