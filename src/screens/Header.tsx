import { StyleSheet, View, Text, Platform, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

export const Header = (): JSX.Element => {

    return (
        <View style={styles.container} >
            <View style={styles.buttonStatus} >
                <TouchableOpacity>
                    <Icon
                        color={"#fff"}
                        size={30}
                        name="checkmark-done-outline"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        color={"#fff"}
                        size={25}
                        name="pencil-outline"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.taskStatus}>
                <Text style={styles.text}> Set Task For Today </Text>
            </View>
            <View style={styles.headerTitle}>
                <Text style={styles.headerText}> My Learning | My Tasks </Text>
                <Icon
                        color={"#fff"}
                        size={30}
                        name="chevron-down-outline"
                    />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#009688',
        justifyContent: 'center',
        // alignItems:'center',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        // zIndex: 9999
    },
    taskStatus: {
        // backgroundColor: 'red',
        // marginTop: 95,
        top: 10,
    },
    text: {
        marginHorizontal: 10,
        color: '#fff',
        fontSize: 20,

    },
    headerTitle: {
        // backgroundColor: 'red',
        position:'relative',
        top: Platform.OS === 'ios' ? 70 : 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText : {
        color: '#fff',
        fontWeight: '600',
        fontSize: 15
    },
    buttonStatus: {
        top: Platform.OS === 'android' ? 12 : 55,
        // alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        right: 20,
        position: 'absolute',
        // backgroundColor: 'red',
        width: 100,
        height: 30

    }
});
