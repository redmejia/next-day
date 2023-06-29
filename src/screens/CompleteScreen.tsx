import { StyleSheet, Text, View } from "react-native";
import { Header } from "../Components/Header";
import { ActionScrollList } from "../Components/ActionScrollList";
import { TaskCardProps } from "../Components/TaskCard";
import { LevelColor } from "../Context/labelLevelColor";
import { ListRender } from "../Components/ListRender";
const data: TaskCardProps[] = [
  { labelColor: LevelColor.COMPLETE, des: "des", name: "one" },
  { labelColor: LevelColor.COMPLETE, des: "des", name: "dos" },
  { labelColor: LevelColor.COMPLETE, des: "des", name: "dos" },
  { labelColor: LevelColor.COMPLETE, des: "des", name: "dos" },
  { labelColor: LevelColor.COMPLETE, des: "This is a test", name: "hello" },
  { labelColor: LevelColor.COMPLETE, des: "This is a test", name: "hello" },



]


export const Complete = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header
        containerBackgroundColor="#2196F3"
        actionText={<Text style={{ textAlign: 'center', fontSize: 30, color: '#fff' }}>Complete</Text>}
      />

      <ActionScrollList
        renderListItems={
          <ListRender

            onPresAction={(value: number) => { console.log(value) }}
            data={data}

          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});