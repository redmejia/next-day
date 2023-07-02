import { StyleSheet, Text, View } from "react-native";
import { Header } from "../Components/Header";
import { ActionScrollList } from "../Components/ActionScrollList";
import { LevelColor } from "../Context/labelLevelColor";
import { ListRender } from "../Components/ListRender";
import { Task } from "../Context/task";

const data: Task[] = [
  { levelColor: LevelColor.COMPLETE, description: "des", title: "one" },
  { levelColor: LevelColor.COMPLETE, description: "des", title: "dos" },
  { levelColor: LevelColor.COMPLETE, description: "des", title: "dos" },
  { levelColor: LevelColor.COMPLETE, description: "des", title: "dos" },
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