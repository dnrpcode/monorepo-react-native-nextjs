import {shared} from '@monorepo/shared';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
// import {shared} from '@monorepo/shared';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  // const {count, decrement, increment} = useCounterStore();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text style={styles.title}>{shared}</Text>
        {/* <Text style={styles.sectionTitle}>
          Count form zuntand share {count}
        </Text>
        <TouchableOpacity onPress={decrement}>
          <Text>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={increment}>
          <Text>Increment</Text>
        </TouchableOpacity> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  title: {
    fontWeight: '700',
    fontSize: 32,
    flex: 1,
    alignSelf: 'center',
  },
});

export default App;
