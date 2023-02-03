import { Text, StyleSheet } from "react-native";
import Colors from "../../utils/Colors";
function Title({ children }) {
    return (<Text
        style={styles.title}>
        {children}</Text>);

};
const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primaryYellow,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.primaryYellow,
        padding: 12,
        maxWidth: '90%'
    },

});
export default Title;