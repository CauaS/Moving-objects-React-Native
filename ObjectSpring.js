import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';

export default class App extends React.Component {

  componentWillMount(){
    this.position = new Animated.ValueXY(0,0); // over here we set up the inicial position
    
    // below, we are using the spring, to move the object from x:0 and y:0 to x:200 and y:500
    Animated.spring(this.position,  {toValue: { x:200, y:500 }}).start();
  }

  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  ball: {
    height: 50,
    width: 50, 
    backgroundColor: 'black'
  }
});
