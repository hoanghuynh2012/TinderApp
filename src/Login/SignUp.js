import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, ThemeProvider} from 'react-native-elements';
import {Input} from 'react-native-elements';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SignUp = () => {
  const [errEmail, setEmail] = useState('');
  const [errPass, setPassword] = useState('');
  return (
    <SafeAreaProvider style={styles.container}>
      <View
        style={{
          flex: 1,
        }}></View>
      <View
        style={{
          flex: 4,
        }}>
        <View style={{flex: 1, width: windowWidth - 100}}>
          <Input
            containerStyle={{}}
            disabledInputStyle={{background: '#ddd'}}
            errorMessage={errEmail}
            label="Email: "
            leftIcon={<Icon name="account-outline" size={20} />}
            placeholder="Enter Name"
          />
        </View>
        <View
          style={{
            flex: 1,
            width: windowWidth - 100,
            marginTop: 20,
          }}>
          <Input
            containerStyle={{}}
            disabledInputStyle={{background: '#ddd'}}
            errorMessage={errPass}
            label="Password: "
            secureTextEntry={true}
            leftIcon={<Icon name="key-outline" size={20} />}
            placeholder="Enter Password"
          />
        </View>
        <View
          style={{
            flex: 1,
            width: windowWidth - 100,
          }}>
          <Input
            containerStyle={{}}
            disabledInputStyle={{background: '#ddd'}}
            errorMessage={errPass}
            label="Password: "
            secureTextEntry={true}
            leftIcon={<Icon name="key-outline" size={20} />}
            placeholder="Enter Password"
          />
        </View>
        <View
          style={{
            flex: 1,
            width: windowWidth - 100,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Button
            buttonStyle={{width: 150}}
            containerStyle={{margin: 5}}
            disabledStyle={{
              borderWidth: 2,
              borderColor: 'red',
            }}
            disabledTitleStyle={{color: 'white'}}
            iconContainerStyle={{background: '#000'}}
            loadingProps={{animating: true}}
            onPress={() => alert('click')}
            title="Submit"
            titleStyle={{marginHorizontal: 5}}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
        }}></View>
    </SafeAreaProvider>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
