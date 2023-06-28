import { Platform, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { TaskCardProps } from "../Components/TaskCard";
import { LevelColor } from "../Context/labelLevelColor";
import { ListRender } from "../Components/ListRender";
import { Text } from "react-native";

const data: TaskCardProps[] = [
    { labelColor: LevelColor.LOW, des: "des", name: "one" },
    { labelColor: LevelColor.MEDIUM, des: "des", name: "dos" },
    { labelColor: LevelColor.HIGH, des: "des", name: "dos" },
    { labelColor: LevelColor.LOW, des: "des", name: "dos" },
    { labelColor: LevelColor.HIGH, des: "This is a test", name: "hello" },
    { labelColor: LevelColor.HIGH, des: "This is a test", name: "hello" },
    { labelColor: LevelColor.LOW, des: "des", name: "dos" },
    { labelColor: LevelColor.HIGH, des: "This is a test", name: "hello" },
    { labelColor: LevelColor.HIGH, des: "This is a test", name: "hello" },
    { labelColor: LevelColor.HIGH, des: "This is a test", name: "hello" },
    { labelColor: LevelColor.HIGH, des: "This is a test", name: "hola" },
    { labelColor: LevelColor.LOW, des: "des", name: "one" },
    { labelColor: LevelColor.MEDIUM, des: "des", name: "dos" },
    { labelColor: LevelColor.HIGH, des: "des", name: "dos" },
    { labelColor: LevelColor.LOW, des: "des", name: "dos" },
    { labelColor: LevelColor.HIGH, des: "This is a test", name: "hello" },
    { labelColor: LevelColor.HIGH, des: "This is a test", name: "hello" },
    { labelColor: LevelColor.LOW, des: "des", name: "dos" },
    { labelColor: LevelColor.HIGH, des: "This is a test", name: "hello" },
    { labelColor: LevelColor.HIGH, des: "This is a test", name: "hello" },
    { labelColor: LevelColor.HIGH, des: "This is a test", name: "hello" },
    { labelColor: LevelColor.HIGH, des: "This is a test", name: "hola" },


]

export const Task = (): JSX.Element => {


    return (

        <View style={{ flex: 8 }} >
            {/* <Text style={{ textAlign: 'center', marginVertical: 10 }} > My Task | My Learn </Text> */}


            <ScrollView
                contentContainerStyle={{ flexGrow: 1, paddingBottom: Platform.OS === 'ios' ? 100 : 70, }}
                showsVerticalScrollIndicator={false}
            >

                <ListRender
                    onPresAction={(value: number) => { console.log(value) }}
                    data={data}
                />
            </ScrollView>
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.floatingButton}
            >
                {/* use Icon not text */}
                <Text style={styles.buttonText}> + </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    floatingButton: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: Platform.OS === 'ios' ? 100 : 70,
        right: 40,

        height: 40,
        width: 40,
        borderRadius: 100,
        backgroundColor: '#2196F3',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 10,

    },

    buttonText: {
        alignSelf: 'center',
        fontWeight: '400',
        fontSize: 30,
        color: '#fff'


    }

});