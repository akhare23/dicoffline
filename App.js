import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import db from "./localdb";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      displaytext: '',
      text: '',
      word: '',
      definition: '',
      wordType: '',
      lexicalCategory:''
    };
  }

  render() {
    console.log(this.state.definition);
    return (
      <View style={{ backgroundColor: 'green', flex: 1 }}>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              text: text
            });
          }}
        />

        <TouchableOpacity
          style={{
            backgroundColor: 'purple',
            margin: 20,
            padding: 20,
            alignItems: 'center',
            borderRadius: 300,
          }}
          onPress={() => {
            this.setState({
              word: this.state.text,
              definition:db[this.state.text].definition,
              lexicalCategory:db[this.state.text].lexicalCategory
            });
          }}>
          <Text>Search</Text>
        </TouchableOpacity>
        <View style={{ margin: 50, backgroundColor: 'orange', padding: 50 }}>
        
          <Text style={{ fontSize: 18 }}>Word: {this.state.word}</Text>
        </View>
        <View style={{ margin: 50, backgroundColor: 'orange', padding: 50 }}>
          <Text style={{ fontSize: 18 }}>
            Definition: {this.state.definition}
          </Text>
        </View>
        <View style={{ margin: 50, backgroundColor: 'orange', padding: 50 }}>
          <Text style={{ fontSize: 18 }}>Word Type: {this.state.lexicalCategory}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    borderColor: 'blue',
    borderWidth: 2,
    marginTop: 20,
    padding: 20,
    textAlign: 'center',
    width: '60%',
    alignSelf: 'center',
  },
});
