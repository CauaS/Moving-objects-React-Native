import React, { useState, useEffect }from 'react';
import { View, Animated, StyleSheet } from 'react-native';


export default function SimpleAnimated() {

    const [largura, setLargura ]= useState(new Animated.Value(0));
    const [altura, setAltura ] = useState(30);
    const [fading, setFading ] = useState( new Animated.Value(0));
    const [spring, setSpring ] = useState( new Animated.ValueXY( { x: 0, y:0 } ));

    Animated.timing(
        largura, 
        {
            toValue: 370,
            duration: 2000,
        }
    ).start();
    
    React.useEffect(()=>{
        Animated.timing(
            fading, 
            {
                toValue: 1,
                duration: 2000
            }
        ).start();
    }, []);

    React.useEffect(()=>{
       Animated.spring(spring,
        {
            toValue: { x: 20, y:350 }
        }).start();  
    }, []);

    console.log(fading);
  return (
    <View style={styles.container}>
        <Animated.View style={{ width: largura, height: altura, backgroundColor: "#222" }}/> 
        <Animated.View style={{ width: 370, height: 70, backgroundColor: "blue",opacity: fading }}/>

        <Animated.View style={ spring.getLayout() }>
            <View style={{ width: 370, height: 70, backgroundColor: "red" }}/> 
        </Animated.View>
        
        <Animated.View style={{ 
                width: 370, 
                height: 70, 
                backgroundColor: "green",
                opacity: fading ,  
                transform:[{
                    translateY: fading.interpolate({
                        inputRange: [0,1],
                        outputRange: [150,0]
                    }),
                }],
            }}
        />
        <Animated.View style={{ 
                width: 370, 
                height: 70, 
                backgroundColor: "purple",
                opacity: fading ,  
                transform:[{
                    rotate: fading.interpolate({
                        inputRange: [0,1],
                        outputRange: ["0deg", "360deg"]
                    }),
                }],
            }}
        />
        <Animated.View style={{ 
                width: 370, 
                height: 70, 
                backgroundColor: "pink",
                transform:[{ scaleY: fading}],
            }}
        />
                    
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ViewAnimated: {
        width: 370,
        height: 30,
        backgroundColor: "#222" 
    }
})