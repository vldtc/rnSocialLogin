import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, Animated} from 'react-native';

const CustomButton = props => {
  const [isPressed, setIsPressed] = useState(false);

  const opacity1 = new Animated.Value(1);
  const opacity2 = new Animated.Value(1);
  const opacity3 = new Animated.Value(1);

  useEffect(() => {
    if (isPressed) {
      Animated.parallel([
        Animated.timing(opacity1, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(opacity2, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(opacity3, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {
        Animated.parallel([
          Animated.timing(opacity3, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(opacity2, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(opacity1, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
        ]).start(() => setIsPressed(false));
      });
    }
  }, [isPressed]);

  return (
    <View
      style={{
        marginTop: 24,
        width: '60%',
        height: 55,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          position: 'absolute',
          height: '75%',
          width: '100%',
          backgroundColor: '#49aefa',
          transform: [{rotate: '8deg'}],
          borderRadius: 16,
          opacity: opacity1,
        }}
      />
      <Animated.View
        style={{
          position: 'absolute',
          height: '75%',
          width: '100%',
          backgroundColor: '#6bbfff',
          transform: [{rotate: '5deg'}],
          borderRadius: 16,
          opacity: opacity2,
        }}
      />
      <Animated.View
        style={{
          position: 'absolute',
          height: '75%',
          width: '100%',
          backgroundColor: '#90cffe',
          transform: [{rotate: '2deg'}],
          borderRadius: 16,
          opacity: opacity3,
        }}
      />
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setIsPressed(true)}
        style={{
          backgroundColor: '#fff',
          width: '97%',
          height: '75%',
          borderRadius: 14,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            width: '100%',
            textAlign: 'center',
            color: '#34a2f6',
            fontWeight: '300',
            fontSize: 20,
          }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
