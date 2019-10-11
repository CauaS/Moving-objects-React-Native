import React, { Component } from 'react';
import {RectButton, BorderlessButton, BaseButton } from 'react-native-gesture-handler';

import { View, Text } from 'react-native';

export default class ButtonGesture extends Component {
    
  render() {
    return (
            <View>
                <RectButton onPress={() => {}} style={{ borderRadius: 2, marginBottom: 10 }}>
                    <View  style={{ borderRadius: 2, borderWidth: 1, borderColor: '#e1e5e8', width: '100%', height: 48, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15,}}>
                        <Text>Bar</Text>
                    </View>
                </RectButton>
                <BorderlessButton onPress={() => {}} style={{ borderRadius: 2, marginBottom: 10 }}>
                    <View  style={{ borderRadius: 2, borderWidth: 1, borderColor: '#e1e5e8', width: '100%', height: 48, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15,}}>
                        <Text>Bar</Text>
                    </View>
                </BorderlessButton>
                <BaseButton onPress={() => {}} style={{ borderRadius: 2, marginBottom: 10 }}>
                    <View  style={{ borderRadius: 2, borderWidth: 1, borderColor: '#e1e5e8', width: '100%', height: 48, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15,}}>
                        <Text>Bar</Text>
                    </View>
                </BaseButton>
            </View>
        );
  }
}
