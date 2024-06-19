import React, { useState, useRef } from 'react';
import { Animated, PanResponder, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;

const SwipeBox = ({ text, img, onSwipeLeft, onSwipeRight }) => {
    const [bgColor] = useState(new Animated.Value(0));
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onPanResponderMove: (evt, gestureState) => {
            const dx = gestureState.dx;
            pan.setValue({ x: dx, y: 0 });  // Restrict to horizontal movement

            if (dx > 0) {
                bgColor.setValue(dx / SCREEN_WIDTH);
            } else {
                bgColor.setValue(dx / SCREEN_WIDTH);
            }
        },
        onPanResponderRelease: (evt, gestureState) => {
            if (gestureState.dx > SWIPE_THRESHOLD) {
                Animated.timing(pan, {
                    toValue: { x: SCREEN_WIDTH, y: 0 },
                    duration: 300,
                    useNativeDriver: true,
                }).start(() => {
                    onSwipeRight();
                    pan.setValue({ x: 0, y: 0 });  // Reset position
                });
            } else if (gestureState.dx < -SWIPE_THRESHOLD) {
                Animated.timing(pan, {
                    toValue: { x: -SCREEN_WIDTH, y: 0 },
                    duration: 300,
                    useNativeDriver: true,
                }).start(() => {
                    onSwipeLeft();
                    pan.setValue({ x: 0, y: 0 });  // Reset position
                });
            } else {
                Animated.spring(pan, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: true,
                }).start();
                Animated.spring(bgColor, {
                    toValue: 0,
                    useNativeDriver: true,
                }).start();
            }
        },
    });

    const interpolatedColor = bgColor.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: ['red', 'white', 'green'],
        extrapolate: 'clamp',
    });

    return (
        <Animated.View
            {...panResponder.panHandlers}
            style={[
                styles.card,
                {
                    transform: pan.getTranslateTransform(),
                    backgroundColor: interpolatedColor,
                },
            ]}
        >
            <Image source={{ uri: img }} style={styles.image} />
            <Text style={styles.text}>{text}</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: SCREEN_WIDTH - 40,
        margin: 20,
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 200,
    },
    text: {
        padding: 20,
        fontSize: 16,
        color: '#333',
    },
});

export default SwipeBox;
