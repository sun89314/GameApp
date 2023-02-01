import React from "react";
import { View, Text, Pressable, StyleSheet } from 'react-native';
function CustomButton({ children, pressFuntion }) {

    return (
        <View style={styles.buttionOuterContainer}>
            <Pressable
                onPress={pressFuntion}
                style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}

            >
                <Text style={styles.buttonText}>
                    {children}
                    {/* {props.children} */}
                </Text>
            </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
    buttionOuterContainer: {
        borderRadius: 28,
        margin: 10,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: "#ddb52f",
        // borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        // margin: 10
    },
    buttonText: {
        // height: 30,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        // width: 50,
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,

    }
});


export default CustomButton;
