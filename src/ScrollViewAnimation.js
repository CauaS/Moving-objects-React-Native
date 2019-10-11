import React,  { useState } from 'react';
import { View, ScrollView, Text, Animated } from 'react-native';


export default function ScrollViewAnimation() {

  const [animatedValue, setAnimatedValue] = useState (new Animated.Value(0));

  const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


  let translateY = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: [0, -180],
    extrapolate: 'clamp',
  });  

  return (
    <View style={{ flex: 1 }}>
      <Animated.ScrollView
        scrollEventThrottle={1}
        onScroll={
          Animated.event(
            [
              { nativeEvent: { contentOffset: { y:animatedValue } }}
            ],
            { useNativeDriver: true}
          )
        }
      >
        { data.map(item => {
          return (
            <View style={{ backgroundColor: 'lightblue', }}>
                <Text style={{ fontSize: 20, padding: 20,}}>
                  {item}
                </Text>
            </View>
          )
        })}
      </Animated.ScrollView>
      <Animated.View 
        style={{ position: 'absolute',
                  backgroundColor: 'red',
                  height: 200,
                  left: 0,
                  right: 0,
                  transform: [{translateY}]
              }} />
    </View>
  );
}
