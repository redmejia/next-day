import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

// export for test data
export interface TaskCardProps {
    name?: string;
    des?: string;
    labelColor: string;
}


export const TaskCard = ({ name, des, labelColor = '#CAD2DB' }: TaskCardProps): JSX.Element => {
    return (
        <View
            style={[styles.container, styles.containerDirection]}
        >
            <View
                style={{
                    ...styles.box,
                    backgroundColor: labelColor
                }}
            />
            <View style={styles.boxInfo}>
                <Text style={styles.textName}>{name}</Text>
                <Text style={styles.textDescription}>{des}</Text>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
        marginHorizontal: 8,
    },
    containerDirection: {
        flexDirection: 'row',
    },
    box: {
        height: 60,
        width: 10,
        backgroundColor: '#CAD2DB',
        borderRadius: 10,
        marginHorizontal: 10,
    },
    boxInfo: {
        // margin : 5,
        width: 340,

        borderWidth: 1,
        borderColor: '#009688',
        borderTop: 20,
        borderTopEndRadius: 20,
        borderBottomLeftRadius: 20,
    },
    textName: {
        color: '#000',
        marginLeft: 20,
        fontSize: 25,
        fontWeight: "400"
    },
    textDescription: {
        color: '#000',
        marginLeft: 20,
        fontSize: 15,
        fontWeight: "300"
    }
})
