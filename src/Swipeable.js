import React,  { Component } from 'react';
import { View, Text, Animated, Alert, TouchableOpacity } from 'react-native';

import { Swipeable } from 'react-native-gesture-handler';



export default class SwipeableComponent extends Component {
    onPress(){
        Alert.alert('Right', 'this is right');
    }
  render() {
    

    const LeftActions = ({progress, dragX, onPress}) => {

        const scale = dragX.interpolate({

            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })

        console.log('LeftActions || ', scale);

        return(
            <TouchableOpacity onPress={() => onPress}>
                <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                    <Animated.Text style={{ transform:[{ scale }], fontSize: 30 }}>Left</Animated.Text>
                </View>
            </TouchableOpacity>
        )
    }
    const RightActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        })

        console.log('RightActions ||', scale);
        return(
            <View
                style={{ justifyContent: 'center', backgroundColor: "#dd2c00", alignItems:'flex-end' }}
            >
                <Animated.Text style={{ transform:[{ scale }], fontSize: 30 }}>Right</Animated.Text>
            </View>
        )
    }
    return (
        <Swipeable
            renderLeftActions={(progress,dragX) => <LeftActions onPress={() => this.onPress } progress={progress} dragX={dragX}/> }
            onSwipeableLeftOpen={() => Alert.alert('Left', 'On SwipeLeft')}
            renderRightActions={ RightActions }
        >
            <View style={{ width: '100%', height: 50, backgroundColor: '#00ced1', alignItems: 'center' }}>
                <Text>Hellor World</Text>
            </View>
        </Swipeable>
    );
  }
}
