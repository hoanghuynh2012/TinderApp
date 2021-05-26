import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {material} from 'react-native-typography';
import {Icon} from 'react-native-elements';
const ChonGioiTinh = ({navigation}) => {
  return (
    <SafeAreaProvider style={styles.container}>
      <View style={{flex: 1}}></View>
      <View style={{flex: 2, margin: 10}}>
        <Text style={material.headline}>Giới Tính của bạn là gì ? </Text>
      </View>

      <View
        style={{
          flex: 15,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#1E90FF',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon color="white" name="male" size={140} type="font-awesome" />
          </View>
          <View style={{flex: 1, width: 80}}>
            <Button
              title="Nam"
              color="#f194ff"
              onPress={() => navigation.navigate('SignUp')}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#FF69B4',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon color="white" name="female" size={140} type="font-awesome" />
          </View>
          <View style={{flex: 1, width: 80}}>
            <Button
              title="Nữ"
              color="#1E90FF"
              onPress={() => navigation.navigate('SignUp')}
            />
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default ChonGioiTinh;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
