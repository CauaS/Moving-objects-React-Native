import React, { Component } from 'react';
import { 
    View, 
    Animated,
    PanResponder
} from 'react-native';

class Deck extends Component {

    constructor(props){
        super(props);

        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            //this function is executed any time a user tas on the screem.
            onStartShouldSetPanResponder: (event, gesture) => true,

            //when the user starts to drag his finger around the sreem.
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx, y:gesture.dy });
            },

            //when the user remove his finger on the screem.
            onPanResponderRelease: () => {}
        })

        this.state={ panResponder, position };
    }

    rendersCards(){
        return this.props.data.map(item => {
            return this.props.renderCard(item)
        })
    }

    render(){
        return( 
            <Animated.View 
                {...this.state.panResponder.panHandlers}
                style={this.state.position.getLayout()}
            >
                {this.rendersCards()}
            </Animated.View>
        );
    }
}
 export default Deck;