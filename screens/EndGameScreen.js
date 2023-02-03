import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Title from "../components/UI/Title";
import CustomButton from "../components/UI/CustomButton";
function EndGameScreen({ finalNumber, GameRound, restartFun }) {
    return (
        <SafeAreaView style={styles.screen}>
            <Title>finalNumber: {finalNumber}</Title>
            <Title>Rounds played: {GameRound}</Title>
            <CustomButton pressFuntion={restartFun}>Restart Game</CustomButton>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen: {
        flexDirection: 'row ',
        alignItems: 'center',
    }
});
export default EndGameScreen;