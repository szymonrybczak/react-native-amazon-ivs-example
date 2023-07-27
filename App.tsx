import {StyleSheet, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {Button, Text, TextInput} from 'react-native-paper';

const App = () => {
  const [streamURL, setStreamURL] = useState('');

  const navigateToWatchStream = () => {
    console.log('navigateToWatchStream');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        label="Stream URL"
        value={streamURL}
        onChangeText={setStreamURL}
        style={styles.input}
      />
      <Button
        style={styles.button}
        onPress={navigateToWatchStream}
        buttonColor="#e1d3eb">
        <Text style={styles.buttonText}>Submit</Text>
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '40%',
    alignItems: 'center',
  },
  input: {
    width: '80%',
  },
  button: {
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#49454f',
    paddingVertical: 8,
    paddingHorizontal: 40,
  },
});

export default App;
