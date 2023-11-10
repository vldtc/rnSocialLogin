import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {StyleSheet} from 'react-native';
import {CustomInputField, CustomButton} from '../../components';

const LoginScreen = () => {
  const [isLoginScreen, setIsLoginScreen] = useState(true);

  const screenHeight = Dimensions.get('window').height;
  const offset = screenHeight * 0.09;

  const onNavigatePress = btn => {
    //Alert.alert(`Pressed the ${btn} button!`);
    if (isLoginScreen && btn === 'right') {
      setIsLoginScreen(false);
    } else {
      setIsLoginScreen(true);
    }
  };

  const loginModal = () => {
    return (
      <View style={style.screenContentContainer}>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{translateY: offset}],
          }}>
          <CustomInputField placeholder="Email" />
          <CustomInputField placeholder="Password" />
          <CustomButton title="Login" />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '120%',
            backgroundColor: '#34a2f6',
            transform: [{rotate: '-75deg'}],
            zIndex: -1,
          }}
        />
      </View>
    );
  };

  const registerModal = () => {
    return (
      <View style={style.screenContentContainer}>
        <Text>Register</Text>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '120%',
            backgroundColor: '#34a2f6',
            transform: [{rotate: '75deg'}],
            zIndex: -1,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: -10,
            },
            shadowOpacity: 0.5,
            shadowRadius: 5,

            elevation: 2,
          }}
        />
      </View>
    );
  };
  return (
    <View style={style.screenContainer}>
      <View style={style.headerContainer}>
        <TouchableOpacity
          activeOpacity={1}
          style={style.touchableOpacityHeader}
          onPress={() => {
            onNavigatePress('left');
          }}>
          <Text style={[style.headerText, style.headerSideText]}>
            {isLoginScreen ? '' : '<Login/>'}
          </Text>
        </TouchableOpacity>
        <Text style={[style.headerText, style.headerMainText]}>
          {isLoginScreen ? 'Login' : 'Register'}
        </Text>
        <TouchableOpacity
          activeOpacity={1}
          style={style.touchableOpacityHeader}
          onPress={() => {
            onNavigatePress('right');
          }}>
          <Text style={[style.headerText, style.headerSideText]}>
            {isLoginScreen ? '<Register/>' : ''}
          </Text>
        </TouchableOpacity>
      </View>
      {isLoginScreen ? loginModal() : registerModal()}
    </View>
  );
};

export default LoginScreen;

const style = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#34a2f6',
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 50,
    marginBottom: 8,
  },
  screenContentContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    //borderTopStartRadius: 50,
    //borderTopEndRadius: 50,
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    marginTop: 8,
    fontSize: 30,
    fontWeight: '100',
    color: '#fff',
  },
  headerMainText: {
    fontWeight: '200',
  },
  headerSideText: {
    fontSize: 20,
  },
  touchableOpacityHeader: {
    flex: 1,
    marginTop: 8,
  },
});
