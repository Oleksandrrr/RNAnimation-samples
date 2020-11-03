import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated } from 'react-native'
import { keyframes,stagger } from 'popmotion';

const COUNT = 5;
const DURATION = 4000;
const initialPhase = { scale: 0, opacity: 1 }
const constructAniamtions = [...Array(COUNT).keys()].map(() => (initialPhase))

class PopMotion extends Component {
    state = {
        aniamtions: constructAniamtions
    }
    componentDidMount(){
        this.animateCircles()
    }

    animateCircles = () => {
        const actions = Array(COUNT).fill(
            keyframes({
                values: [
                    initialPhase,
                    { scale: 2, opacity: 0 }
                ],
                duration: DURATION,
                loop: Infinity,
                yoyo: Infinity

            })
        )
        stagger(actions, DURATION / COUNT).start(aniamtions => {
            this.setState({ aniamtions })
        })
    }
    render() {
        return (
            <View style={styles.container}>
                {this.state.aniamtions.map(({opacity, scale}, index)=>{
                    return <Animated.View key ={index} style={[styles.circle,{
                        transform:[{scale}],
                        opacity:opacity
                    }]} >

                    </Animated.View>
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    circle:{
        backgroundColor:'gold',
        width:200,
        height:200,
        borderRadius:100,
        position:'absolute'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default PopMotion