import { ScrollView, Text, View } from "react-native";
import { TaskCardProps } from "../Components/TaskCard";
import { LevelColor } from "../Context/labelLevelColor";
import { ListRender } from "../Components/ListRender";
import { SafeAreaView } from "react-native-safe-area-context";

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
    { labelColor: LevelColor.HIGH, des: "This is a test", name: "hoak" },
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
    { labelColor: LevelColor.HIGH, des: "This is a test", name: "hoak" },


]

export const Task = (): JSX.Element => {


    return (

        <View style={{ flex: 8 }} >
            {/* <Text style={{ textAlign: 'center', marginVertical: 10 }} > My Task | My Learn </Text> */}


                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
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