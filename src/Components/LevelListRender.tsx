import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LevelColor } from "../Context/labelLevelColor";

export const LevelListRender = (): JSX.Element => {

    const level: LevelColor[] = [
        LevelColor.HIGH,
        LevelColor.MEDIUM,
        LevelColor.LOW,
    ]

    const levelList = level.map((item, index) => {

        return (
            <TouchableOpacity key={index}>
                <View style={{
                    ...styles.levelBox,

                    backgroundColor: item
                }} />
            </TouchableOpacity>
        )
    })

    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: 20, }}>Select Level</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text> High </Text>
                <Text> Medium </Text>
                <Text> Low </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                {levelList}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    levelBox: {
        width: 55,
        height: 20,
        borderRadius: 40,
        marginHorizontal: 8
    }
});