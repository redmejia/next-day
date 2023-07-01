import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LevelColor } from "../Context/labelLevelColor";
import { Form } from "./Modal";
import { Dispatch, SetStateAction } from "react";


interface LevelProps {
    // stateFun: () => void;
    dispatchSetAction: Dispatch<SetStateAction<Form>>
    // action: (fn: ActionSelectColor, value: string)  =>  void
    action: (fn:  Dispatch<SetStateAction<Form>>, value: string)  =>  void
}

export const LevelListRender = ({ action, dispatchSetAction }: LevelProps): JSX.Element => {



    const level: LevelColor[] = [
        LevelColor.HIGH,
        LevelColor.MEDIUM,
        LevelColor.LOW,
    ]



    const levelList = level.map((item, index) => {

        return (
            <TouchableOpacity key={index}
                onPress={() => action(dispatchSetAction, item)}
            >
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
            <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-around' }}>
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