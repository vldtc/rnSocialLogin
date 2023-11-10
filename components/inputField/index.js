import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Animated} from 'react-native';

const CustomInputField = props => {
  const [text, setText] = useState('');
  const [isOnFocus, setOnFocus] = useState(false);
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFourth, setShowFourth] = useState(false);
  const [opacityFirst] = useState(new Animated.Value(0));
  const [opacitySecond] = useState(new Animated.Value(0));
  const [opacityThird] = useState(new Animated.Value(0));
  const [opacityFourth] = useState(new Animated.Value(0));
  const [colorValue] = useState(new Animated.Value(0));

  const color = colorValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['white', 'black'],
  });

  useEffect(() => {
    if (isOnFocus) {
      setShowFourth(true);
      Animated.timing(colorValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }).start();
      Animated.timing(opacityFourth, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
      setTimeout(() => {
        setShowThird(true);
        Animated.timing(opacityThird, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
      setTimeout(() => {
        setShowSecond(true);
        Animated.timing(opacitySecond, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, 100);
      setTimeout(() => {
        setShowFirst(true);
        Animated.timing(opacityFirst, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, 200);
    } else {
      Animated.timing(opacityFirst, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => setShowFirst(false));
      Animated.timing(opacitySecond, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => setShowSecond(false));
      Animated.timing(opacityThird, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => setShowThird(false));
      Animated.timing(opacityFourth, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => setShowFourth(false));
      Animated.timing(colorValue, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  }, [isOnFocus]);

  return (
    <View
      style={{
        marginTop: 24,
        width: '80%',
        height: 65,
        borderRadius: 16,
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      {showFirst && (
        <Animated.View
          style={{
            position: 'absolute',
            height: '75%',
            width: '100%',
            backgroundColor: '#49adfa',
            transform: [{rotate: '8deg'}],
            borderRadius: 16,
            opacity: opacityFirst,
          }}
        />
      )}
      {showSecond && (
        <Animated.View
          style={{
            position: 'absolute',
            height: '75%',
            width: '100%',
            backgroundColor: '#6bc6ff',
            transform: [{rotate: '5deg'}],
            borderRadius: 16,
            opacity: opacitySecond,
          }}
        />
      )}
      {showThird && (
        <Animated.View
          style={{
            position: 'absolute',
            height: '75%',
            width: '100%',
            backgroundColor: '#93d4ff',
            transform: [{rotate: '2deg'}],
            borderRadius: 16,
            opacity: opacityThird,
          }}
        />
      )}
      {showFourth && (
        <Animated.View
          style={{
            position: 'absolute',
            start: 0,
            height: '75%',
            width: '100%',
            backgroundColor: '#93d4ff',
            transform: [{rotate: '5deg'}, {translateY: -22}],
            borderTopStartRadius: 16,
            borderTopEndRadius: 16,
            opacity: opacityFourth,
          }}
        />
      )}
      <Animated.Text
        style={{
          width: '100%',
          marginStart: 24,
          color: color,
          fontSize: 20,
          fontWeight: 200,
        }}>
        {props.placeholder}
      </Animated.Text>
      <TextInput
        onFocus={() => {
          setOnFocus(true);
        }}
        onBlur={() => {
          setOnFocus(false);
        }}
        style={{
          backgroundColor: '#fff',
          width: '97%',
          height: '75%',
          borderRadius: 14,
          paddingHorizontal: 16,
          marginBottom: 7,
          color: '#34a2f6',
          fontWeight: '200',
          fontSize: 20,
        }}
        value={text}
        onChangeText={changedText => {
          setText(changedText);
        }}
      />
    </View>
  );
};

export default CustomInputField;
