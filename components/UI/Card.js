import React, { useState } from "react";
import { Text, TextInput, Button, View, StyleSheet, Alert } from 'react-native';
import CustomButton from "./CustomButton";
import Title from "./Title";
import Colors from "../../utils/Colors";

function Card({ children }) {
    return (
        <View style={styles.inputContainser} >
            {children}
        </View>
    );
}



const styles = StyleSheet.create({
    inputContainser: {
        // justifyContent:'',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        padding: 26,
        // textAlign: 'center',
        // flex: 1,
        backgroundColor: Colors.primaryPurple,
    }
});
export default Card;