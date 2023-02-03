import { View, Text, StyleSheet } from "react-native";
import Colors from "../../utils/Colors";
function Number({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.primaryYellow,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.primaryYellow,
        fontSize: 36,
        fontWeight: 'bold'
    }
})
export default Number;