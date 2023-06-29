import { StyleSheet, Text, View } from "react-native";
import { Header } from "../Components/Header";
import { ActionScrollList } from "../Components/ActionScrollList";



export const Complete = (): JSX.Element => {
    return (
        <View style={styles.container}>
          <Header 
            containerBackgroundColor="#2196F3"
            actionText={<Text style={{textAlign: 'center', fontSize: 30, color: '#fff'}}>Complete</Text>}
          />

		  <ActionScrollList
			// working on this
		  />
        </View>
    );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    }
});