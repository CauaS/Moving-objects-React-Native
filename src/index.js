import React, { Component } from 'react';

import { View, Text, PanResponder, StyleSheet } from 'react-native';

import { Swipeable } from 'react-native-gesture-handler';


export default class Main extends Component {

    state = {
        dragging: false,
        initialTop: 50,
        initialLeft: 50,
        offsetTop: 0,
        offsetLeft: 0,
      }
    
      panResponder = {}
    
      componentWillMount() {
        this.panResponder = PanResponder.create({
          onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
          onPanResponderGrant: this.handlePanResponderGrant,
          onPanResponderMove: this.handlePanResponderMove,
          onPanResponderRelease: this.handlePanResponderEnd,
          onPanResponderTerminate: this.handlePanResponderEnd,
        })
      }
           // Should we become active when the user presses down on the square?
           handleStartShouldSetPanResponder = () => {
            return true
          }
        
          // We were granted responder status! Let's update the UI
          handlePanResponderGrant = () => {
            this.setState({dragging: true})
          }
        
          // Every time the touch/mouse moves
          handlePanResponderMove = (e, gestureState) => {
    
        
            // Keep track of how far we've moved in total (dx and dy)
            this.setState({
              offsetTop: gestureState.dy,
              offsetLeft: gestureState.dx,  
            })
          }
        
          // When the touch/mouse is lifted
          handlePanResponderEnd = (e, gestureState) => {
            const {initialTop, initialLeft} = this.state
            
            console.log('handlePanResponderEnd => quando termina.')
        
            // The drag is fin  ished. Set the initialTop and initialLeft so that
            // the new position sticks. Reset offsetTop and offsetLeft for the next drag.
    
            this.setState({
              dragging: false,
              initialTop: initialTop + gestureState.dy,
              initialLeft: initialLeft + gestureState.dx,
              offsetTop: 0,
              offsetLeft: 0,
            })
          }

      render() {
        const {dragging, initialTop, initialLeft, offsetTop, offsetLeft} = this.state
    
        // Update style with the state of the drag thus far
        const style = {
          backgroundColor: dragging ? 'skyblue' : 'steelblue',
          top: initialTop + offsetTop,
          left: initialLeft + offsetLeft,
        }
        return (
          <View style={styles.container}>
            <View
              // Put all panHandlers into the View's props
              {...this.panResponder.panHandlers}
              style={[styles.square, style,  { transform: [{ translateX: 60 }]}]}
            >
              <Text style={styles.text}>
                DRAG ME
              </Text>
            </View>
          </View>
        )
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1
      },
      square: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
      },
      text: {
        color: 'white',
        fontSize: 12,
      }
    })