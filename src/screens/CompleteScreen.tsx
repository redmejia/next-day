import { StyleSheet, Text, View } from "react-native";
import { Header } from "../Components/Header";
import { ActionScrollList } from "../Components/ActionScrollList";
import { ListRender } from "../Components/ListRender";
import { useContext } from "react";
import { TaskContext } from "../Context/taskContext";



export const Complete = (): JSX.Element => {

	const { completedTask, deleteCompletedTask} = useContext(TaskContext)


	return (
		<View style={styles.container}>
			<Header
				containerBackgroundColor="#2196F3"
				actionText={<Text style={{ textAlign: 'center', fontSize: 30, color: '#fff' }}>Completed</Text>}
			/>

			<ActionScrollList
				renderListItems={
					<ListRender
						onDeletAction={deleteCompletedTask}
						data={completedTask}
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