import React, { useState } from "react";
import { Text, TextInput, Button, View, StyleSheet, Alert } from 'react-native';
import CustomButton from "../components/UI/CustomButton";
import Title from "../components/UI/Title";
import Colors from '../utils/Colors';
import Card from "../components/UI/Card";
function StartGameScreen({ setPickedNumber }) {
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
        setPickedNumber(enteredNumber);
    }
    return (
        <View style={styles.screenContainer}>
            <Title> Guess my number</Title>
            <Card>
                <Text style={styles.instructionText}>input 2 numbers</Text>
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
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
    instructionText: {
        color: Colors.primaryYellow,
        fontSize: 30,
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
        borderBottomColor: Colors.primaryYellow,
        borderBottomWidth: 2,
        color: Colors.primaryYellow,
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center'
    }

});

export default StartGameScreen;