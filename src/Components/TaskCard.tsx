import { View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from "react-native";

// export for test data
export interface TaskCardProps {
    name?: string;
    des?: string;
    labelColor?: string;

    textTitleStyle?: StyleProp<TextStyle>;
    desTitleStyle?: StyleProp<TextStyle>;

    boxContainer?: StyleProp<ViewStyle>;

}


export const TaskCard = ({ name, des, labelColor, boxContainer, textTitleStyle, desTitleStyle }: TaskCardProps): JSX.Element => {
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
            <View style={[styles.boxInfo, boxContainer ]}>
                <Text style={[styles.textName, textTitleStyle]}>{name}</Text>
                <Text style={[styles.textDescription, desTitleStyle]}>{des}</Text>
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
        height: 30,
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
