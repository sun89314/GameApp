import React, { useState, useEffect } from "react";
import { Ionicons } from '@expo/vector-icons';
import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/UI/Title";
import Colors from "../utils/Colors";
import Number from "../components/Game/Number";
import CustomButton from "../components/UI/CustomButton";
import Card from "../components/UI/Card";
function generateRandomNumber(min, max, exclude) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    if (num === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return num;
    }
}
let minBoundary = 1;
let maxBoundary = 100;
function InGameScreen({ choosenNumber, gameOverHandler, updateGameRound }) {
    const initNumber = generateRandomNumber(minBoundary, maxBoundary, choosenNumber);
    const [currentGuess, setcurrentGuess] = useState(initNumber);
    useEffect(() => {
        if (currentGuess == choosenNumber) {
            gameOverHandler(currentGuess);
        }
    }, [currentGuess, choosenNumber, gameOverHandler]);
    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);
    function guessNextNumber(higher) {
        updateGameRound();
        if ((higher && currentGuess > choosenNumber) || (!higher && currentGuess < choosenNumber)) {
            Alert.alert("dont lie", "you know that is wrong", [{ text: 'sorry', style: 'cancel' },])
            return;
        }
        if (higher) {
            minBoundary = currentGuess + 1;
        }
        else {
            maxBoundary = currentGuess;

        }
        let newGuess = generateRandomNumber(minBoundary, maxBoundary, 0);
        setcurrentGuess(newGuess);

        // console.log(currentGuess);
    }
    function checkNumber(currentGuess) {
        if (currentGuess == choosenNumber) {
            console.log(currentGuess)
        }
    }
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <Number>{currentGuess}</Number>
            <Card>
                <Title>Higher or lower?</Title>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <CustomButton pressFuntion={() => { guessNextNumber(true) }}>
                            <Ionicons name="md-add" size={24} color="white" />

                        </CustomButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomButton pressFuntion={() => { guessNextNumber(false) }}>
                            <Ionicons name="md-remove" size={24} color="white" />
                        </CustomButton>
                    </View>
                </View>
                {/* buttons */}
            </Card>
            <View>
                {/* log rounds */}
            </View>
        </View >
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primaryYellow,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.primaryYellow,
        padding: 12,
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
export default InGameScreen;