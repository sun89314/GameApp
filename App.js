import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import InGameScreen from './screens/InGameScreen';
import EndGameScreen from './screens/EndGameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [GameIsOver, setGameIsOver] = useState(false);
  const [GameRound, setGameRound] = useState(0);
  function setPickedNumber(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  function gameOverHandler(finalGuess) {
    setGameIsOver(true);
    setUserNumber(finalGuess);
  }
  function restartFun() {
    setGameRound(0);
    setGameIsOver(false);
    setUserNumber(null);
  }
  function updateGameRound() {
    setGameRound(GameRound + 1);
  }
  let screen = <StartGameScreen setPickedNumber={setPickedNumber} />
  if (userNumber) {
    screen = <InGameScreen choosenNumber={userNumber} updateGameRound={updateGameRound} gameOverHandler={gameOverHandler} />
  }
  if (GameIsOver) {
    screen = <EndGameScreen
      finalNumber={userNumber}
      GameRound={GameRound}
      restartFun={restartFun}
    />
  }
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./Images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>

    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: '#ddb52f'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  backgroundImage: {
    opacity: 0.15
  }
});
