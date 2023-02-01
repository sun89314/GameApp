import React, { useState } from "react";
import { Text, TextInput, Button, View, StyleSheet, Alert } from 'react-native';
import CustomButton from "../components/CustomButton";
function StartGameScreen() {
    const [enteredNumber, setenteredNumber] = useState('');
    function numberInputHandler(enteredText) {
        setenteredNumber(enteredText);
    }
    function resetInputNumber() {
        setenteredNumber('');
    }
    function confirmInputHander() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
            Alert.alert('bad input!', 'number has to be a number',
                [{ text: 'Okey', style: 'destructive', onPress: resetInputNumber }, { text: 'no!', style: 'cacel' }]
            );
            return;
        }
        console.log('valid number!')
    }
    return (
        <View style={styles.inputContainser}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <CustomButton pressFuntion={resetInputNumber}>Reset</CustomButton>
                </View>
                <View style={styles.buttonContainer}>
                    <CustomButton pressFuntion={confirmInputHander}>Comfirm</CustomButton>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainser: {
        // justifyContent:'',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        padding: 26,
        // textAlign: 'center',
        // flex: 1,
        backgroundColor: '#72063c',
    },
    buttonsContainer: {
        flexDirection: 'row',

    },
    buttonContainer: {
        flex: 1

    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center'
    }

});

export default StartGameScreen;