import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  state = {
    counter: 0,
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            this.setState({
              counter: this.state.counter + 1
            });
          }}
          title="Increase"
        >
        </Button>

        <Text style={styles.text}>{this.state.counter}</Text>

        <Button
          onPress={() => {
            this.setState({
              counter: this.state.counter - 1
            });
          }}
          title="Decrease"
        >
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 60,
  },
});
