import { StyleSheet, View, Text, Platform } from "react-native";

export const Header = (): JSX.Element => {

    return (
        <View style={styles.container} >
            <View style={styles.buttonStatus} >
                <Text> h </Text>
                <Text> h </Text>
            </View>

            <View style={styles.taskStatus}>
                <Text style={styles.text}> Set Task For Today </Text>
                <Text style={styles.text}> Set Task For Today </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009688',
        justifyContent: 'center',
        // alignItems:'center',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    },
    taskStatus: {
        // backgroundColor: 'red',
        marginTop: 90
    },
    text: {
        marginHorizontal: 10,
        color: '#fff',
        fontSize: 20,

    },
    buttonStatus: {
        top: Platform.OS === 'android' ? 12 : 55,
        // alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        right: 20,
        position: 'absolute',
        backgroundColor: 'red',
        width: 150,
        height: 60

    }
});
