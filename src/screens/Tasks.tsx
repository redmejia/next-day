import { ScrollView, Text, View } from "react-native";
import { TaskCardProps } from "../Components/TaskCard";
import { LevelColor } from "../Context/labelLevelColor";
import { ListRender } from "../Components/ListRender";

const data: TaskCardProps[] = [
    { labelColor: LevelColor.LOW, des: "des", name: "one" },
    { labelColor: LevelColor.MEDIUM, des: "des", name: "dos" },
    { labelColor: LevelColor.HIGH, des: "des", name: "dos" },
    { labelColor: LevelColor.LOW, des: "des", name: "dos" },
    { labelColor: LevelColor.HIGH, des: "This is a test", name: "hello" },
    { labelColor: LevelColor.HIGH, des: "This is a test", name: "hello" },
]

export const Task = (): JSX.Element => {

    return (
        <View style={{ flex: 3 }} >
            <Text style={{ textAlign: 'center', marginVertical: 20 }} > My Task | My Learn </Text>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <ListRender
                    onPresAction={(value: number) => { console.log(value) }}
                    data={data}
                />
            </ScrollView>
        </View>
    );
};