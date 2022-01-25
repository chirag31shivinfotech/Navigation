import React from 'react';
import {Component} from 'react';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';

export default class SendMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'admin',
      password: '@dmin',
    };
  }
  // checkLogin = () => {
  //   if (this.state.email == 'admin' && this.state.password == '@dmin') {
  //     this.props.navigation.navigate();
  //   } else if (this.state.email != 'admin' && this.state.password == '@dmin') {
  //     Alert(alert('Please Enter valid User Name.'));
  //   } else if (this.state.email == 'admin' && this.state.password != '@dmin') {
  //     Alert(alert('Please Enter valid Password.'));
  //   } else {
  //     Alert(alert('Please enter valid user name and password.'));
  //   }
  // };
  render() {
    return (
      <View style={styles.flexView}>
        <View style={styles.commonTextInputView}>
          <Text>Send Message</Text>
          <TextInput
            placeholder="Enter Phone Number"
            style={styles.text_Input}
          />
        </View>
        <View style={styles.commonTextInputView}>
          <TextInput placeholder="Enter Message" style={styles.text_Input} />
        </View>
        <View style={styles.Loginview}>
          <Text style={styles.loginText}>LogIn</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  commonTextInputView: {
    height: 50,
    width: '70%',
    backgroundColor: 'white',
    marginVertical: 10,
  },
  text_Input: {
    paddingLeft: 20,
  },
});
