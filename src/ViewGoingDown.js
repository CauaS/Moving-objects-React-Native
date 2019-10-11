import React,  { useState }  from 'react';

import { View, StyleSheet, Animated, Button } from 'react-native';

export default function ViewGoingDown(){

    const [animation, setAnimation ] = useState( new Animated.ValueXY({ x:20, y:10 }));
    const [ bool, setBool ] = useState(true);

    function handleAnimation() {        
        setBool(!bool); 
        
        if(bool != true) {
            Animated.spring(animation,
            {
                toValue: { x: 20, y:20 }
            }).start();  
        }else{
            Animated.spring(animation,
                {
                    toValue: { x: 20, y:550 }
                }).start();  
        }
    }   

    return(        
        <Animated.View style={animation.getLayout()}>
            <View 
             style={styles.content}  
            >
             <Button title='Press' onPress={() => handleAnimation()}/>
            </View>
        </Animated.View>
    );  
}

const styles = StyleSheet.create({
    content: {
        paddingTop: 30,
        width: '90%',
        height: 380,
        backgroundColor: '#CB86F5',
        borderRadius: 10,
        elevation: 5
    }
})
