import React from 'react';
import {Component} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// const validationSchema = Yup.object().shape({
//   firstName: Yup.string().required('Fullname is required.'),
//   password: Yup.string().required('Password is required'),
// });

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  // checkLogin = values => {
  //   console.log('data is ', values.firstName, values.password);
  // };
  render() {
    return (
      // <Formik
      //   initialValues={{
      //     firstName: '',
      //     password: '',
      //   }}
      //   onSubmit={values => {
      //     this.checkLogin(values);
      //   }}
      //   validationSchema={validationSchema}>
      //   {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
      <View style={styles.flexView}>
        {/* <View style={styles.commonTextInputView}>
              <View>
                <TextInput
                  placeholder="User Name"
                  style={styles.text_Input}
                  onBlur={() => setFieldTouched('firstName')}
                  onChangeText={handleChange('firstName')}
                />
                {!touched.firstName || !errors.firstName ? null : (
                  <View style={styles.errorView}>
                    <Text style={{color: 'white'}}>!</Text>
                  </View>
                )}
              </View>
              {!touched.firstName || !errors.firstName ? null : (
                <View style={styles.errorView1}>
                  <Text style={styles.error}>{errors.firstName}</Text>
                </View>
              )}
            </View>
             */}
        <View style={styles.whiteBox}>
          <View style={styles.whiteBox}>
            <TextInput
              style={styles.textInput}
              placeholder={'User Name'}
              placeholderTextColor={'black'}
              // onBlur={() => setFieldTouched('firstName')}
              // onChangeText={handleChange('firstName')}
            />
          </View>
          <View style={styles.commonTextInputView}>
            <View>
              <TextInput
                placeholder="Pass Word"
                style={styles.text_Input}
                // onBlur={() => setFieldTouched('password')}
                // onChangeText={handleChange('password')}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('SendMessage');
            }}
            style={styles.Loginview}>
            <Text style={styles.loginText}>LogIn</Text>
          </TouchableOpacity>
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
  Loginview: {
    height: 50,
    width: '70%',
    backgroundColor: 'white',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  loginText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  errorView: {
    height: 20,
    width: 20,
    borderRadius: 20 / 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  errorView1: {
    position: 'absolute',
    right: 30,
    marginTop: 50,
  },
  error: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    alignSelf: 'flex-end',
    padding: 5,
    marginBottom: 10,
    marginRight: 25,
    backgroundColor: 'black',
    color: 'white',
    borderTopColor: 'red',
    borderTopWidth: 2,
    textAlign: 'right',
    paddingBottom: 0,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 0,
  },
  whiteBox: {
    paddingLeft: 25,
    height: 50,
    width: '70%',
    backgroundColor: '#fff',
    fontFamily: 'Poppins-Light',
    // flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  textInput: {
    padding: 0,
    fontFamily: 'Poppins-Light',
    fontSize: 14,
  },
});
