import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Button} from 'react-native-elements';
import {Dimensions} from 'react-native';
import {material} from 'react-native-typography';

import {Icon} from 'react-native-elements';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const ManHinhChao = ({navigation}) => {
  return (
    <SafeAreaProvider style={styles.container}>
      <View
        style={{
          flex: 1,
        }}></View>
      <View
        style={{
          flex: 1,
        }}>
        <View style={{flex: 1}}>
          <Text style={material.headline}>Cậu đã có tài khoản chưa nhỉ ?</Text>
        </View>
        <View style={{flex: 1}}>
          <Button
            icon={
              <Icon color="white" name="done" size={30} type="material"></Icon>
            }
            title="Nếu có rồi thì ấn nha !"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
        <View style={{flex: 1}}>
          <Button
            icon={
              <Icon color="white" name="close" size={30} type="material"></Icon>
            }
            onPress={() => navigation.navigate('ChonGt')}
            title="Nếu chưa thì ấn đây nha !"
            type="outline"
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

export default ManHinhChao;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
